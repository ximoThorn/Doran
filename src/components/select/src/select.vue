<template>
  <div
    v-click-outside="handlerClickOutside"
    :class="classes">
    <div
      ref="reference"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      @click="handlerClick"
      class="dr-select-wrap">
      <div
        v-if="multiple"
        id="selectTags"
        ref="selectTags"
        class="dr-select-tags">
        <div>
          <span
            v-for="item in currentMultipleLabels"
            :key="item.value"
            class="dr-select-tag">
            {{item.label}}
            <i @click.stop="handlerTagClear(item)" class="dr-icon-default dr-icon-close"></i>
          </span>
        </div>
        <input
          v-model="filterModel"
          :placeholder="placeholder"
          :disabled="disabled"
          @compositionstart="handlerComposition"
          @compositionupdate="handlerComposition"
          @compositionend="handlerComposition"
          v-if="filterable"
          type="text"
          class="dr-select-filter-input">
      </div>
      <dr-input
        ref="selectInput"
        :placeholder="placeholder"
        :readonly="!filterable && !multiple"
        :size="size"
        @input="debounceQueryInputChange"
        @focus="handlerInputFocus"
        v-model="currentLabel"
        :disabled="disabled"
        :class="inputClasses">
        <i slot="suffix" class="dr-icon-default dr-icon-arrow-right"></i>
      </dr-input>
      <i
        v-if="showClear"
        @mousedown.prevent
        @click="handlerClear"
        class="dr-icon-default dr-icon-roundclose dr-select-clear"></i>
    </div>
    <transition
      @before-leave="beforeTransition"
      @before-enter="beforeTransition"
      @after-leave="afterTransition"
      @after-enter="afterTransition"
      name="select-suggestion">
      <dr-popper
        v-show="isVisible"
        :placement="placement"
        :transfer="transfer"
        ref="popper">
        <ul class="dr-select-option-wrap">
          <slot>
            <p class="dr-select-empty" v-if="!$slots.empty">{{emptyText}}</p>
          </slot>
        </ul>
        <slot v-if="!$slots.default" name="empty"></slot>
      </dr-popper>
    </transition>
  </div>
</template>

<script>
import DrInput from '../../input';
import DrPopper from '@/base/popper';
import { directive as clickOutside } from 'v-click-outside-x'; // 点击dom外部时
import { debounce } from 'throttle-debounce';

import { addResizeListener, removeResizeListener } from '@/utils/dom-resize-event';
import { validValue, typeValide } from '@/utils/validate';
import emitter from '@/mixins/emitter';

const drPreFixSelect = 'dr-select';
const debounceTime = 300;

export default {
  name: 'DrSelect',
  directives: {
    clickOutside
  },
  mixins: [emitter],
  props: {
    value: {
      required: true
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    placement: {
      validator (value) {
        return validValue(value, ['top', 'bottom', 'top-start', 'bottom-start', 'top-end', 'bottom-end']);
      },
      default: 'bottom-start'
    },
    size: {
      validator (value) {
        return validValue(value, ['default', 'medium', 'small']);
      },
      default: 'default'
    },
    filterable: Boolean,
    noDataText: {
      type: String,
      default: '无数据'
    },
    noMatchText: {
      type: String,
      default: '无结果'
    },
    multiple: Boolean,
    disabled: Boolean,
    clearable: Boolean,
    remote: Boolean,
    loading: Boolean,
    loadingText: {
      type: String,
      default: '加载中...'
    },
    filterMethod: Function,
    remoteMethod: Function,
    transfer: {
      type: Boolean,
      default() {
        return !!this.$DORAN.transfer
      }
    }
  },
  data() {
    return {
      currentLabel: '',
      currentMultipleLabels: [],
      currentValues: this.multiple ? [] : '',
      isOnComposition: false,
      isVisible: false,
      hover: false,
      togglePopperFlag: true,
      slotOptionsData: [],
      filterModel: '',
      filterOptionValue: '',
      debounceQueryInputChange: function () {}
    };
  },
  components: {
    DrInput,
    DrPopper
  },
  created() {
    this.debounceQueryInputChange = debounce(debounceTime, (val) => {
      this.queryHandlerInput(val);
    });
  },
  mounted() {
    this.value && this.setCurrentValues();
    this.getSelectWidth();
    addResizeListener(this.$el, this.getSelectWidth);
    this.$on('handlerClickOption', this.onSelectedOption);
  },
  computed: {
    classes() {
      return [
        `${drPreFixSelect}-default`,
        {
          [`${drPreFixSelect}-disabled`]: this.disabled,
          [`${drPreFixSelect}-multiple`]: this.multiple,
          [`${drPreFixSelect}-${this.size}`]: this.size !== 'default'
        }
      ];
    },
    inputClasses() {
      return [
        `${drPreFixSelect}-input`,
        {
          [`${drPreFixSelect}-visible`]: this.isVisible
        }
      ];
    },
    isCorrectValue() { // 判断value是不是有值
      const { value } = this;
      return value !== undefined && value !== '' && value !== null
    },
    showClear() {
      return this.clearable && this.hover && this.isCorrectValue && !this.multiple;
    },
    emptyText() {
      if (this.remote) {
        return this.loading ? this.loadingText : this.noDataText;
      };
      if (this.filterable && !this.remote) {
        return this.noMatchText;
      };
      return this.noDataText;
    }
  },
  methods: {
    handlerClick() {
      if (this.disabled) {
        return;
      };
      if (this.togglePopperFlag) { // 防止连续点击, 出现动画bug
        this.isVisible = !this.isVisible;
      };
    },
    handlerClickOutside() {
      this.isVisible = false;
    },
    beforeTransition() {
      this.togglePopperFlag = false;
    },
    afterTransition() {
      this.togglePopperFlag = true;
    },
    handlerClear() { // 单选清空时
      this.currentLabel = '';
      this.$emit('input', '');
      this.$emit('clear', '');
    },
    onSelectedOption(option = {}) { // 点击选中options时
      const { label, value } = option;
      if (this.multiple) {
        const optionIndex = this.currentMultipleLabels.findIndex(item => item.value === value);
        if (optionIndex <= -1) {
          this.currentValues.push(value);
          this.currentMultipleLabels.push(option);
        } else {
          this.currentValues.splice(optionIndex, 1);
          this.currentMultipleLabels.splice(optionIndex, 1);
        };
      } else {
        this.currentValues = value;
        this.currentLabel = label;
        this.isVisible = false;
      };
      this.$emit('input', this.currentValues);
    },
    setCurrentValues() {
      this.currentValues = this.value;
      if (this.multiple) {
        this.currentMultipleLabels = this.slotOptionsData.filter(({ value }) => this.value.indexOf(value) > -1);
      } else {
        const currentObj = this.slotOptionsData.find(({ value }) => value === this.value) || {};
        this.currentLabel = currentObj.label || '';
      };
    },
    handlerTagClear(obj) { // 删除多选的tag时
      const optionIndex = this.currentMultipleLabels.findIndex(item => item.value === obj.value);
      this.currentMultipleLabels.splice(optionIndex, 1);
      this.currentValues.splice(optionIndex, 1);
      this.$emit('removeTag', obj.value);
    },
    getSelectWidth() { // 更改popper的宽度
      this.$nextTick(() => {
        const selectTagsWidth = this.$el.clientWidth;
        this.$refs.popper.$el.style.minWidth = `${selectTagsWidth}px`;
      });
      if (this.multiple) {
        this.updateSelectHeight();
      };
    },
    updateSelectHeight() { // 多选时，动态更改select的高度
      this.$nextTick(() => {
        const selectTagsHeight = +this.$refs.selectTags.clientHeight + 4;
        this.$refs.selectInput.$el.children[0].style.height = `${selectTagsHeight}px`;
        this.isVisible && this.broadcast('DrPopper', 'onUpdatePopper');
      });
    },
    queryHandlerInput(val) {
      if (this.isOnComposition) {
        return;
      };
      if (this.filterable && !this.multiple && !this.remote) {
        if (this.filterMethod) {
          this.filterMethod(val);
        } else {
          this.filterOptionValue = val;
        };
      };
      if (this.remote && this.filterable && !this.multiple) {
        this.remoteMethod && this.remoteMethod(val);
      };
    },
    handlerInputFocus() {
      const currentObj = this.slotOptionsData.find(({ value }) => value === this.value) || {};
      this.queryHandlerInput(currentObj.label);
    },
    handlerComposition(e) { // 对在ios上非直接输入时(例如：输入汉字时的打拼音的过程)，也会触发input事件的优化
      if (e.type === 'compositionend') {
        this.isOnComposition = false;
      } else {
        this.isOnComposition = true;
      };
    }
  },
  watch: {
    value(newValue) {
      if (this.multiple) {
        this.updateSelectHeight();
      };
      this.setCurrentValues();
      this.$emit('change', newValue);
    },
    isVisible(newValue) { // 在显示/隐藏popper时，触发popper的更新与销毁
      if (this.filterable && !newValue && this.value) {
        if (!this.multiple) {
          const currentObj = this.slotOptionsData.find(({ value }) => value === this.value) || {};
          this.currentLabel = currentObj.label;
          this.$refs.selectInput.blur();
        };
      };
      this.$emit('visibleChange', newValue);
      this.broadcast('DrPopper', newValue ? 'onUpdatePopper' : 'onDestoryPopper');
    },
    slotOptionsData(newValue) { // 监听option数据变化
      newValue && this.isVisible && this.broadcast('DrPopper', 'onUpdatePopper');
    },
    multiple(value) {
      if (value && typeValide(this.currentValues) !== 'array') {
        this.currentValues = [this.currentValues];
      } else if (!value && typeValide(this.currentValues) === 'array') {
        this.currentValues = this.currentValues[0] || '';
      };
    },
    currentMultipleLabels() {
      this.updateSelectHeight();
      this.isVisible && this.broadcast('DrPopper', 'onUpdatePopper');
    },
    filterModel(query) {
      this.$emit('filterChange', query);
    }
  },
  beforeDestroy() {
    this.$refs.popper.$el.style.display = 'none'; // 这里不能设置isVisible=false
    this.broadcast('DrPopper', 'onDestoryPopper');
    removeResizeListener(this.$el || '', this.getSelectWidth || function () {});
  }
};
</script>
