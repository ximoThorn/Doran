<template>
  <div :class="classes">
    <div class="dr-card-header" v-if="!!$slots.hender || header">
      <slot name="header">{{header}}</slot>
    </div>
    <div class="dr-card-body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { validValue } from '@/utils/validate';

const cardPreFix = 'dr-card';

export default {
  name: 'DrCard',
  props: {
    shadow: {
      type: String,
      validator(val) {
        return validValue(val, ['always', 'hover', 'never'])
      },
      default: 'always'
    },
    bodyStyle: [String, Object],
    header: String
  },
  data() {
    return {}
  },
  computed: {
    classes() {
      return [
        `${cardPreFix}-default`,
        {
          [`${cardPreFix}-${this.shadow}`]: !!this.shadow
        }
      ];
    }
  }
};
</script>
