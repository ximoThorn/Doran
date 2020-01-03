<template>
  <label :class="classes">
    <input
      class="dr-switch-input"
      :checked="checked"
      :disabled="disabled"
      @change="handleChange"
      type="checkbox">
    <span
      :class="{
        'dr-switch-label-loading': loading
      }"
      class="dr-switch-label"
      :style="styles">
      <slot name="open" v-if="checked"></slot>
      <slot name="close" v-else></slot>
    </span>
  </label>
</template>

<script>
const drPreFixSwitch = 'dr-switch';

export default {
  name: 'DrSwitch',
  props: {
    value: [String, Boolean, Number],
    disabled: Boolean,
    trueLabel: {
      type: [String, Boolean, Number],
      default: undefined
    },
    falseLabel: {
      type: [String, Boolean, Number],
      default: undefined
    },
    trueColor: {
      type: String,
      default: '#19be6b'
    },
    falseColor: {
      type: String,
      default: '#ed4014'
    },
    loading: Boolean
  },
  data() {
    return {
      currentValue: ''
    };
  },
  computed: {
    classes() {
      return [
        `${drPreFixSwitch}-default`,
        {
          [`${drPreFixSwitch}-checked`]: this.checked,
          [`${drPreFixSwitch}-disabled`]: this.disabled
        }
      ];
    },
    checked() {
      if (this.trueLabel !== undefined || this.falseLabel !== undefined) {
        return this.value === this.trueLabel;
      };
      return this.value;
    },
    styles() {
      let obj = {};
      if (this.checked) {
        obj.backgroundColor = this.trueColor;
      } else {
        obj.backgroundColor = this.falseColor;
      };
      return obj;
    }
  },
  methods: {
    handleChange(e) {
      if (this.disabled) {
        return;
      }
      const checked = e.target.checked;
      if (this.trueLabel !== undefined || this.falseLabel !== undefined) {
        this.currentValue = checked ? this.trueLabel : this.falseLabel;
      } else {
        this.currentValue = checked;
      };
      this.$emit('input', this.currentValue);
      this.$emit('change', this.currentValue);
    }
  }
};
</script>
