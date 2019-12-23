<template>
  <transition appear :name="fade ? 'tag-fade' : ''">
    <div :class="classes" :style="styles">
      <slot></slot>
      <DrIcon v-if="closable" @click="handleClick" icon="dr-icon-close"></DrIcon>
    </div>
  </transition>
</template>

<script>
import DrIcon from '../../icon';
import { validValue } from '@/utils/validate';

const drPreFixTag = 'dr-tag';

export default {
  name: 'DrTag',
  props: {
    type: {
      validator(value) {
        const arr = ['primary', 'info', 'success', 'warning', 'error'];
        return validValue(value, arr);
      }
    },
    size: {
      validator(value) {
        const arr = ['medium', 'small', 'mini'];
        return validValue(value, arr);
      }
    },
    theme: {
      validator(value) {
        const arr = ['dark', 'light', 'hollow'];
        return validValue(value, arr);
      },
      default: 'light'
    },
    bgColor: String,
    color: String,
    closable: Boolean,
    fade: Boolean // 是否开启消失动画
  },
  computed: {
    classes() {
      return [
        `${drPreFixTag}-default`,
        {
          [`${drPreFixTag}-${this.type}`]: !!this.type,
          [`${drPreFixTag}-${this.size}`]: !!this.size,
          [`${drPreFixTag}-${this.theme}`]: this.theme !== 'light'
        }
      ];
    },
    styles() {
      let obj = {};
      this.bgColor && (obj.backgroundColor = this.bgColor);
      this.color && (obj.color = this.color);
      return obj;
    }
  },
  components: {
    DrIcon
  },
  methods: {
    handleClick(e) {
      this.$emit('close', e);
    }
  }
}
</script>
