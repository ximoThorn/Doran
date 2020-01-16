<template>
  <li
    @click.stop="handlerSelectOption"
    :style="styles"
    :class="classes">
    <slot>
      <span>{{label || value}}</span>
    </slot>
  </li>
</template>

<script>
import emitter from '@/mixins/emitter';

const drFixPreOption = 'dr-option';

export default {
  name: 'DrOption',
  mixins: [emitter],
  props: {
    value: {},
    label: [String, Number],
    disabled: Boolean
  },
  data() {
    return {
      select: ''
    };
  },
  created() {
    this._parentInit();
    this.select.slotOptionsData.push({
      value: this.value,
      label: this.label
    });
  },
  computed: {
    classes() {
      return [
        `${drFixPreOption}-default`,
        {
          [`${drFixPreOption}-disabled`]: this.disabled,
          [`${drFixPreOption}-active`]: this.optionActive
        }
      ]
    },
    optionActive() {
      if (!this.select.multiple) {
        return this.value === this.select.value;
      } else {
        return this.select.value.indexOf(this.value) > -1;
      };
    },
    styles() {
      let obj = {};
      if (this.select.filterable && this.select.filterOptionValue) {
        const lowValue = this.select.filterOptionValue.toLowerCase();
        !this.label.includes(lowValue) && (obj.display = 'none');
      };
      return obj;
    }
  },
  methods: {
    _parentInit() {
      let parent = this.$parent;
      while (parent) {
        if (parent && parent.$options.name === 'DrSelect') {
          this.select = parent;
          return;
        } else {
          parent = parent.$parent;
        };
      };
    },
    handlerSelectOption() {
      if (this.disabled) {
        return;
      };
      this.dispatch('DrSelect', 'handlerClickOption', {
        value: this.value,
        label: this.label || ''
      });
    }
  }
};
</script>
