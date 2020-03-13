<template>
  <div :class="classes">
    <input type="text"
       @change="handlerChange"
       @input="handlerInput"
       @focus="handlerFocus"
       @blur="handlerBlur"
      :value="currentValue"
      :disabled="disabled"
      :readonly="readonly || !editable"
      :placeholder="placeholder"
       ref="inputNumber"
      class="dr-input-number-inner">
    <div class="dr-input-number-handler">
      <div
        @click="upStep"
        :class="handlerUpClasses">
        <DrIcon icon="dr-icon-arrow-up" :size="sizeFontMap[this.size]"></DrIcon>
      </div>
      <div
        @click="downStep"
        :class="handlerDownClasses">
        <DrIcon icon="dr-icon-arrow-down" :size="sizeFontMap[this.size]"></DrIcon>
      </div>
    </div>
  </div>
</template>

<script>
import DrIcon from '../../icon';

import { validValue } from '@/utils/validate';
const drPreFixInputNumber = 'dr-input-number';

const sizeFontMap = {
  default: '16',
  small: '14',
  mini: '12'
};

function addNum (num1, num2) {
  let sq1, sq2, m;
  try {
    sq1 = num1.toString().split('.')[1].length;
  } catch (e) {
    sq1 = 0;
  };
  try {
    sq2 = num2.toString().split('.')[1].length;
  } catch (e) {
    sq2 = 0;
  };
  m = Math.pow(10, Math.max(sq1, sq2));
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
};

export default {
  name: 'DrInputNumber',
  props: {
    value: Number,
    placeholder: {
      type: String
    },
    disabled: Boolean,
    readonly: Boolean,
    max: Number,
    min: Number,
    step: {
      type: Number,
      default: 1
    },
    editable: { // 是否可编辑
      type: Boolean,
      default: true
    },
    precision: { // 数值精度, 必须是一个非负整数
      type: Number,
      validator(val) {
        return val >= 0 && val === parseInt(val, 10);
      }
    },
    size: {
      validator(value) {
        const arr = ['default', 'medium', 'small'];
        return validValue(value, arr);
      },
      default: 'default'
    }
  },
  components: {
    DrIcon
  },
  data() {
    return {
      sizeFontMap
    };
  },
  computed: {
    classes() {
      return [
        `${drPreFixInputNumber}-default`,
        {
          [`${drPreFixInputNumber}-disabled`]: this.disabled,
          [`${drPreFixInputNumber}-${this.size}`]: this.size !== 'default'
        }
      ];
    },
    handlerUpClasses() {
      return [
        `${drPreFixInputNumber}-up`,
        {
          [`${drPreFixInputNumber}-up-disabled`]: this.upDisabled
        }
      ];
    },
    handlerDownClasses() {
      return [
        `${drPreFixInputNumber}-down`,
        {
          [`${drPreFixInputNumber}-down-disabled`]: this.downDisabled
        }
      ];
    },
    currentValue() {
      if (this.value === undefined || this.value === null) {
        return '';
      };
      return this.precision ? this.value.toFixed(this.precision) : this.value;
    },
    upDisabled() {
      if (this.max === undefined || this.max === null) {
        return false;
      };
      return this.currentValue >= this.max;
    },
    downDisabled() {
      if (this.min === undefined || this.min === null) {
        return false;
      };
      return this.currentValue <= this.min;
    }
  },
  methods: {
    handlerChange(e) {
      this.$emit('change', e.target.value);
    },
    handlerInput(e) {
      const value = e.target.value.trim();
      const cacheVal = this.currentValue;

      // 检验输入的值是否是数字
      const val = Number(value);
      if (isNaN(val)) {
        e.target.value = cacheVal;
      } else {
        this.$emit('input', val);
        this.$emit('change', val);
      };
    },
    upStep() {
      if (this.upDisabled || this.disabled) {
        return;
      };
      this.setValue('up');
    },
    downStep() {
      if (this.downDisabled || this.disabled) {
        return;
      };
      this.setValue('down');
    },
    setValue(opre) {
      let val = this.value;
      if (opre === 'up') {
        val = addNum(this.value, this.step);
      } else if (opre === 'down') {
        val = addNum(this.value, -this.step);
      };
      this.$emit('input', val);
      this.$emit('change', val);
    },
    handlerFocus(e) {
      this.$emit('focus', e);
    },
    handlerBlur(e) {
      this.$emit('blur', e);
    },
    focus() { // methods focus
      this.$refs.inputNumber.focus();
    }
  }
};
</script>
