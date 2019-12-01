<template>
  <label :class="classes">
    <span class="dr-radio-edge">
      <span class="dr-radio-inner"></span>
      <input
        :value="label"
        :checked="checked"
        @change="handleChange"
        :class="inputClasses"
        :disabled="disabled"
        type="radio">
    </span>
    <span class="dr-radio-label" @keydown.stop><slot></slot></span>
  </label>
</template>

<script>
import { validValue } from '@/utils/validate';
const drPrefixRadio = 'dr-radio';

export default {
  name: 'DrRadio',
  props: {
    value: [Boolean, String, Number],
    label: [Boolean, String, Number],
    disabled: {
      type: Boolean,
      default: false
    },
    border: Boolean,
    size: {
      validator(value) {
        const arr = ['medium', 'small', 'mini'];
        return validValue(value, arr);
      }
    }
  },
  data() {
    return {
      radioGroup: '',
      isGroup: false
    };
  },
  computed: {
    classes() {
      return [
        `${drPrefixRadio}-default`,
        {
          [`${drPrefixRadio}-checked`]: this.checked,
          [`${drPrefixRadio}-disabled`]: this.disabled,
          [`${drPrefixRadio}-border`]: this.border,
          [`${drPrefixRadio}-${this.finalSize}`]: !!this.finalSize && this.border
        }
      ];
    },
    inputClasses() {
      return [
        'dr-radio-input'
      ];
    },
    checked() {
      return this.isGroup ? this.radioGroup.value === this.label : this.value === this.label;
    },
    finalSize() {
      if (this.radioGroup.type === 'button') {
        return '';
      }
      return this.size || this.radioGroup.size || '';
    }
  },
  mounted() {
    this._parentInit();
  },
  methods: {
    _parentInit() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== 'DrRadioGroup') {
          parent = parent.$parent;
        } else {
          this.radioGroup = parent;
          this.isGroup = true;
          return;
        };
      };
    },
    handleChange(e) {
      this.$emit('input', this.label);
      this.$emit('change', this.label);
      if (this.isGroup) {
        this.radioGroup.$emit('input', this.label);
        this.radioGroup.$emit('change', this.label);
      };
    }
  }
}
</script>
