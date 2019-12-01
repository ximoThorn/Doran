<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { validValue } from '@/utils/validate';
const drPreFixRadioGroup = 'dr-radio-group';

export default {
  name: 'DrRadioGroup',
  props: {
    value: [String, Number, Boolean],
    type: {
      validator(val) {
        return val === 'button';
      }
    },
    size: {
      validator(val) {
        const arr = ['medium', 'small', 'mini'];
        return validValue(val, arr);
      }
    }
  },
  computed: {
    classes() {
      return [
        `${drPreFixRadioGroup}-default`,
        {
          [`${drPreFixRadioGroup}-${this.type}`]: this.type,
          [`${drPreFixRadioGroup}-${this.size}`]: this.size && (this.type === 'button')
        }
      ]
    }
  }
}
</script>
