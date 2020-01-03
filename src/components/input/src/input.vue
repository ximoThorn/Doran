<template>
  <div
     @mouseenter="hovering = true"
     @mouseleave="hovering = false"
    :class="classes">
    <template v-if="type !== 'textarea'">
      <input
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        @input="handlerInput"
        @change="handlerChange"
        class="dr-input-inner">
      <!-- 前置内容 -->
      <!-- 后置内容 -->
      <span class="dr-input-suffix">
        <slot v-if="!showClear && $slots.suffix" name="suffix"></slot>
      <!-- @mousedown.prevent 清除时防止input失去焦点-->
        <i
          v-if="showClear"
          @mousedown.prevent
          @click="clearValue"
          class="dr-icon-default dr-icon-roundclose">
        </i>
        <i
          v-if="showPassword"
          @mousedown.prevent
          @click="handlerPassword"
          :class="{
            'dr-icon-attentionfill': passwordVisible,
            'dr-icon-attention': !passwordVisible
          }"
          class="dr-icon-default">
        </i>
      </span>
    </template>
    <textarea v-else></textarea>
  </div>
</template>

<script>
import { validValue } from '@/utils/validate';

const drPreFixInput = 'dr-input';

export default {
  name: 'DrInput',
  props: {
    value: [String, Number],
    type: {
      validator(val) {
        const arr = ['text', 'textarea', 'password', 'url', 'email', 'date', 'number', 'tel'];
        return validValue(val, arr);
      },
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    clearable: Boolean,
    password: Boolean
  },
  data() {
    return {
      hovering: false,
      passwordVisible: false
    };
  },
  computed: {
    classes() {
      return [
        `${drPreFixInput}-default`,
        {
          [`${drPreFixInput}-disabled`]: this.disabled,
          [`${drPreFixInput}--suffix`]: this.clearable
        }
      ];
    },
    isCorrectValue() { // 判断value是不是有值
      const { value } = this;
      return value !== undefined && value !== '' && value !== null
    },
    showClear() { // 是否展示可清除icon
      return this.hovering && this.isCorrectValue && this.clearable && !this.disabled;
    },
    showPassword() { // 是否展示密码显示icon
      return this.type === 'password' && this.password && this.isCorrectValue;
    }
  },
  methods: {
    handlerInput(e) {
      const targetValue = e.target.value;
      if (targetValue !== undefined) {
        this.$emit('input', targetValue);
      };
    },
    handlerChange(e) {
      const targetValue = e.target.value;
      this.$emit('change', targetValue);
    },
    clearValue() {
      this.$emit('input', '');
      this.$emit('change', '');
    },
    handlerPassword() {
      this.passwordVisible = !this.passwordVisible;
    }
  }
};
</script>
