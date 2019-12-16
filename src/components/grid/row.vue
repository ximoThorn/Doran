<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
import { validValue } from '@/utils/validate';

const drPreFixRow = 'dr-row';

export default {
  name: 'DrRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: {
      validator(val) {
        const arr = ['flex'];
        return validValue(val, arr);
      }
    },
    justify: {
      validator(val) {
        const arr = ['start', 'center', 'end', 'space-around', 'space-between'];
        return validValue(val, arr);
      },
      default: 'start'
    },
    align: {
      validator(val) {
        const arr = ['top', 'middle', 'bottom'];
        return validValue(val, arr);
      },
      default: 'top'
    }
  },
  computed: {
    classes() {
      return [
        `${drPreFixRow}-default`,
        {
          [`${drPreFixRow}-justify-${this.justify}`]: this.justify !== 'start',
          [`${drPreFixRow}-align-${this.align}`]: this.align !== 'top',
          [`${drPreFixRow}-${this.type}`]: !!this.type
        }
      ];
    },
    styles() {
      let obj = {};
      if (this.gutter !== 0) {
        obj = {
          marginLeft: `${this.gutter / -2}px`,
          marginRight: `${this.gutter / -2}px`
        };
      };
      return obj;
    }
  }
};
</script>
