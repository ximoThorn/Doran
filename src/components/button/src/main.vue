<template>
  <button :class="classes">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
const btnPreFix = 'dr-button'
export default {
  name: 'DrButton',
  props: {
    type: {
      type: String
    },
    hollow: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    }
  },
  computed: {
    classes() {
      return [
        `${btnPreFix}`,
        `${btnPreFix}-${this.type || 'default'}`,
        {
          [`${btnPreFix}-hollow`]: this.hollow,
          [`${btnPreFix}-${this.size}`]: !!this.size
        }
      ]
    }
  }
}
</script>
