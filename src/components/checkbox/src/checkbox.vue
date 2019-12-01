<template>
  <label :class="classes">
    <span class="dr-checkbox-edge">
      <span
        :class="{
          'is-focus': focus
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
        const arr = ['medium', 'small', 'mini'];
        return validValue(value, arr);
      }
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
          [`${drPreFixCheckbox}-disabled`]: this.disabled
        }
      ];
    },
    checked() {
      if (this.isGroup) {
        return this.model.indexOf(this.label) > -1;
      }
      return this.trueLabel || this.falseLabel ? this.trueLabel === this.currentValue : this.currentValue;
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
      this.currentValue = this.trueLabel || this.falseLabel ? (checked ? this.trueLabel : this.falseLabel) : checked;
      this.$emit('change', this.currentValue);
    }
  }
}
</script>
