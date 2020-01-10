<template>
  <div
    v-click-outside="handlerClickOutside"
    @mouseenter="hover = true"
    :class="classes">
    <div
      ref="reference"
      class="dr-select-wrap">
      <dr-input
        :placeholder="placeholder"
        :readonly="!filterable"
        @input="handlerInput"
        @click.native="handlerClick"
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
    <transition name="select-suggestion">
      <dr-popper
        v-show="isVisible"
        ref="popper">
        <slot>
          <p class="dr-select-empty" v-if="!$slots.empty">{{noDataText}}</p>
        </slot>
        <slot v-if="!$slots.default" name="empty"></slot>
      </dr-popper>
    </transition>
  </div>
</template>

<script>
import DrInput from '../../input';
import DrPopper from '@/base/popper';
import { directive as clickOutside } from 'v-click-outside-x'; // 点击dom外部时

const drPreFixSelect = 'dr-select';
export default {
  name: 'DrSelect',
  directives: {
    clickOutside
  },
  props: {
    value: {
      required: true
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    filterable: Boolean,
    noDataText: {
      type: String,
      default: '无数据'
    },
    multiple: Boolean,
    disabled: Boolean,
    clearable: Boolean
  },
  data() {
    return {
      currentLabel: '',
      currentValues: this.multiple ? [] : '',
      isOnComposition: false,
      isVisible: false,
      hover: true
    };
  },
  components: {
    DrInput,
    DrPopper
  },
  computed: {
    classes() {
      return [
        `${drPreFixSelect}-default`,
        {
          [`${drPreFixSelect}-disabled`]: this.disabled
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
      return this.clearable && this.hover && this.isCorrectValue;
    }
  },
  mounted() {
    this.$on('handlerClickOption', this.onSelectedOption)
  },
  methods: {
    handlerInput(val) {
      console.log(val);
    },
    handlerClick() {
      if (this.disabled) {
        return;
      };
      this.isVisible = !this.isVisible;
    },
    handlerClickOutside() {
      this.isVisible = false;
    },
    handlerClear() {
      this.$emit('input', '');
      this.$emit('clear', '');
    },
    onSelectedOption(option = {}) { // 点击选中options时
      const { label, value } = option;
      if (this.multiple) {
        this.currentValues.push(value);
      } else {
        this.currentValues = value;
        this.currentLabel = label;
        this.isVisible = false;
      };
      this.$emit('input', this.currentValues);
    },
    setCurrentValues() {
      this.currentValues = this.value;
    }
  },
  watch: {
    value(newValue, oldValue) {
      this.currentValues = newValue;
    }
  }
};
</script>
