<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { validValue } from '@/utils/validate';
const drPreFixCheckboxGroup = 'dr-checkbox-group';

export default {
  name: 'DrCheckboxGroup',
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },
    size: {
      validator(value) {
        const arr = ['medium', 'small', 'mini'];
        return validValue(value, arr);
      }
    },
    type: {
      validator(value) {
        const arr = ['button'];
        return validValue(value, arr);
      }
    }
  },
  computed: {
    classes() {
      return [
        `${drPreFixCheckboxGroup}-default`,
        {
          [`${drPreFixCheckboxGroup}-${this.type}`]: this.type,
          [`${drPreFixCheckboxGroup}-${this.size}`]: this.size && (this.type === 'button')
        }
      ]
    }
  }
}
</script>
