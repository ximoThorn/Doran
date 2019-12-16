<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
const drPreFixCol = 'dr-col';

export default {
  name: 'DrCol',
  props: {
    span: [String, Number],
    offset: [String, Number],
    order: [String, Number], // row为flex布局下才有用
    pull: [String, Number],
    push: [String, Number]
  },
  computed: {
    classes() {
      return [
        `${drPreFixCol}-default`,
        {
          [`${drPreFixCol}-${this.span}`]: this.span,
          [`${drPreFixCol}-offset-${this.offset}`]: this.offset,
          [`${drPreFixCol}-order-${this.order}`]: this.order,
          [`${drPreFixCol}-pull-${this.pull}`]: this.pull,
          [`${drPreFixCol}-push-${this.push}`]: this.push
        }
      ];
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
