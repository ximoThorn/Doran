<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
import { typeValide } from '@/utils/validate';

const drPreFixCol = 'dr-col';
const medias = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
  name: 'DrCol',
  props: {
    span: {
      type: [String, Number],
      default: 24
    },
    offset: [String, Number],
    order: [String, Number], // row为flex布局下才有用
    pull: [String, Number],
    push: [String, Number],
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    classes() {
      let arrs = [
        `${drPreFixCol}-default`,
        {
          [`${drPreFixCol}-${this.span}`]: this.span,
          [`${drPreFixCol}-offset-${this.offset}`]: !!this.offset,
          [`${drPreFixCol}-order-${this.order}`]: !!this.order,
          [`${drPreFixCol}-pull-${this.pull}`]: !!this.pull,
          [`${drPreFixCol}-push-${this.push}`]: !!this.push
        }
      ];
      medias.forEach(item => {
        if (typeValide(this[item]) === 'number') {
          arrs.push(`${drPreFixCol}-${item}-${this[item]}`);
        } else if (typeValide(this[item]) === 'object') {
          const obj = this[item];
          Object.keys(obj).forEach(child => {
            let str = child !== 'span' ? `${drPreFixCol}-${item}-${child}-${obj[child]}` : `${drPreFixCol}-${item}-${obj[child]}`;
            arrs.push(str);
          })
        }
      });
      return arrs;
    },
    styles() {
      let obj = {};
      if (this.gutter) {
        obj.paddingLeft = `${this.gutter / 2}px`;
        obj.paddingRight = `${this.gutter / 2}px`;
      };
      return obj;
    },
    gutter() {
      let getter = '';
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name === 'DrRow') {
          return parent.gutter;
        } else {
          parent = parent.$parent;
        }
      };
      return getter || 0;
    }
  }
};
</script>
