<template>
  <div class="dr-breadcrumb-default">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DrBreadcrumb',
  props: {
    separator: {
      type: String,
      default: ''
    },
    separatorIcon: {
      type: String,
      default: ''
    }
  }
};
</script>
