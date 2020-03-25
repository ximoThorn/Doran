<template>
  <label :class="classes">
    <span class="dr-checkbox-edge">
      <span
        :class="{
          'dr-checkbox-focus': focus,
          'dr-checkbox-indeterminate': indeterminate
        }"
        class="dr-checkbox-inner">
      </span>
      <input
        v-if="trueLabel || falseLabel"
        :checked="checked"
        :disabled="disabled"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false"
        class="dr-checkbox-input"
        type="checkbox">
      <input
        v-else
        :value="label"
        v-model="model"
        :checked="checked"
        :disabled="disabled"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false"
        class="dr-checkbox-input"
        type="checkbox">
    </span>
    <span class="dr-checkbox-label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import { validValue } from '@/utils/validate';
const drPreFixCheckbox = 'dr-checkbox';

export default {
  name: 'DrCheckbox',
  props: {
    value: {},
    label: {}, // 在checkbox-group或者绑定值为Array时才有效
    disabled: Boolean,
    indeterminate: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    border: Boolean,
    size: {
      validator(value) {
        const arr = ['default', 'medium', 'small', 'mini'];
        return validValue(value, arr);
      },
      default: 'default'
    }
  },
  data() {
    return {
      currentValue: '',
      focus: false,
      isGroup: false,
      checkboxGroup: ''
    };
  },
  computed: {
    classes() {
      return [
        `${drPreFixCheckbox}-default`,
        {
          [`${drPreFixCheckbox}-checked`]: this.checked,
          [`${drPreFixCheckbox}-disabled`]: this.disabled,
          [`${drPreFixCheckbox}-border`]: this.border,
          [`${drPreFixCheckbox}-${this.finalSize}`]: this.finalSize !== 'default'
        }
      ];
    },
    checked() {
      if (this.isGroup) {
        return this.model.indexOf(this.label) > -1;
      }
      if (this.trueLabel !== undefined || this.falseLabel !== undefined) {
        return this.trueLabel === this.currentValue;
      }
      return this.value;
    },
    finalSize() {
      if (this.checkboxGroup.type === 'button') {
        return '';
      }
      return this.size || this.checkboxGroup.size || '';
    },
    model: {
      get(val) {
        return this.isGroup ? this.checkboxGroup.value : this.value;
      },
      set(val) {
        this.$emit('input', val);
        if (this.isGroup && this.checkboxGroup) {
          this.checkboxGroup.$emit('input', val);
          this.$nextTick(() => {
            this.checkboxGroup.$emit('change', this.model);
          });
        };
      }
    }
  },
  mounted() {
    this._parentInit();
  },
  methods: {
    _parentInit() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== 'DrCheckboxGroup') {
          parent = parent.$parent;
        } else {
          this.isGroup = true;
          this.checkboxGroup = parent;
          return;
        };
      };
    },
    handleChange(e) {
      if (this.disabled) {
        return false;
      };
      const checked = e.target.checked;
      if (this.trueLabel !== undefined || this.falseLabel !== undefined) {
        this.currentValue = checked ? this.trueLabel : this.falseLabel;
      } else {
        this.currentValue = checked;
      };
      this.$emit('change', this.currentValue);
    }
  }
}
</script>
