<template>
  <div class="dr-badge-default">
    <slot></slot>
    <transition name="sup-zoom" >
      <sup v-show="!hidden" :class="classes" :style="styles">{{currentValue}}</sup>
    </transition>
  </div>
</template>

<script>
import { validValue } from '@/utils/validate';
const drPreFixBadge = 'dr-badge'

export default {
  name: 'DrBadge',
  props: {
    count: [String, Number],
    text: String,
    type: {
      type: String,
      validator(val) {
        const arr = ['primary', 'info', 'success', 'warning', 'error'];
        return validValue(val, arr);
      },
      default: 'primary'
    },
    max: [String, Number],
    color: String,
    hidden: Boolean,
    dot: Boolean
  },
  computed: {
    classes() {
      return [
        `${drPreFixBadge}-sup`,
        `${drPreFixBadge}-sup-${this.type}`,
        {
          [`${drPreFixBadge}-sup-absolute`]: !!this.$slots.default,
          [`${drPreFixBadge}-sup-dot`]: this.dot
        }
      ]
    },
    styles() {
      return {
        'background-color': this.color
      };
    },
    currentValue() {
      if (this.text) {
        return this.text;
      }
      if (this.max !== undefined) {
        return +this.count >= +this.max ? `${this.max}+` : this.count;
      };
      return this.dot ? '' : this.count;
    }
  }
};
</script>
