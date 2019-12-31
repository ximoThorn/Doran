<template>
  <div :class="classes">
    <div v-if="direction === 'horizontal' && $slots.default" :class="textClasses">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { validValue } from '@/utils/validate';
const drPreFixDivider = 'dr-divider';

export default {
  name: 'DrDivider',
  props: {
    dashed: Boolean,
    direction: {
      validator(value) {
        const arr = ['vertical', 'horizontal'];
        return validValue(value, arr);
      },
      default: 'horizontal'
    },
    contentPosition: {
      validator(value) {
        const arr = ['left', 'center', 'right'];
        return validValue(value, arr);
      },
      default: 'left'
    }
  },
  computed: {
    classes() {
      return [
        `${drPreFixDivider}-default`,
        {
          [`${drPreFixDivider}-dashed`]: this.dashed,
          [`${drPreFixDivider}-${this.direction}`]: this.direction === 'vertical'
        }
      ];
    },
    textClasses() {
      return [
        `${drPreFixDivider}-text`,
        {
          [`${drPreFixDivider}-${this.contentPosition}`]: !!this.contentPosition
        }
      ];
    }
  }
}
</script>
