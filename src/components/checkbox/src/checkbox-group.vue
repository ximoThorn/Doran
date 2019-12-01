<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DrCheckboxGroup',
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    classes() {
      return [];
    }
  }
}
</script>
