<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { validValue } from '@/utils/validate';
export default {
  name: 'DrButtonGroup',
  props: {
    size: {
      validator(value) {
        const arr = ['medium', 'small', 'mini'];
        return validValue(value, arr);
      }
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'dr-button-group': !this.vertical,
        'dr-button-group-vertical': this.vertical
      };
    }
  },
  methods: {
    _handlerSize(val) {
      this.$children.forEach((item) => {
        if (item.$options.name === 'DrButton') {
          item.sizeInherit = val;
        };
      });
    }
  },
  watch: {
    size: {
      handler(val) {
        this.$nextTick(() => {
          this._handlerSize(val);
        })
      },
      immediate: true
    }
  }
}
</script>
