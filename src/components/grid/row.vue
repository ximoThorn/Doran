<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
import { patchChildren } from '@/utils/utils';
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
      ]
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
  },
  mounted() {
    this.gutterSet(this.gutter);
  },
  methods: {
    gutterSet(val) {
      // 在iview中 把 Col 里的 Row 里的 Col 也找到 同时根据最上层的row的gutter来改变的，我觉得这样的处理是并不好的
      // Col 里的 Row 里的 Col的间距还是交给它的上层 Row 的gutter去处理
      const rols = patchChildren(this, 'DrCol') || [];
      rols.forEach((child) => {
        child.$options.name === 'DrCol' && (child.gutter = val);
      });
    }
  },
  watch: {
    gutter(val) {
      this.gutterSet(val);
    }
  }
};
</script>
