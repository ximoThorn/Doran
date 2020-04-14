<template>
  <div class="dr-pagination-total">
    共 {{total}} 条
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    total: {
      type: Number,
      default: 0
    }
  }
}
</script>
