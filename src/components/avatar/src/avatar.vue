<template>
  <span :class="classes" :style="styles">
    <img v-if="src" :src="src" :alt="alt" @error="handleError">
    <DrIcon v-else-if="!$slots.default" :icon="icon"></DrIcon>
    <slot></slot>
  </span>
</template>

<script>
import DrIcon from '../../icon';
import { validValue } from '@/utils/validate';
const drPreFixAvatar = 'dr-avatar';

export default {
  name: 'DrAvatar',
  props: {
    shape: {
      type: String,
      validator(value) {
        const arr = ['square', 'circle'];
        return validValue(value, arr);
      },
      default: 'square'
    },
    size: {
      type: String,
      validator(value) {
        const arr = ['large', 'medium', 'small'];
        return validValue(value, arr);
      }
    },
    src: String,
    alt: String,
    icon: {
      type: String,
      default: 'dr-icon-people'
    },
    color: String,
    bgColor: String
  },
  components: {
    DrIcon
  },
  computed: {
    classes() {
      return [
        `${drPreFixAvatar}-default`,
        `${drPreFixAvatar}-${this.size}`,
        `${drPreFixAvatar}-${this.shape}`,
        {}
      ];
    },
    styles() {
      return {
        color: this.color,
        backgroundColor: this.bgColor
      };
    }
  },
  methods: {
    handleError(e) {
      this.$emit('error', e);
    }
  }
};
</script>
