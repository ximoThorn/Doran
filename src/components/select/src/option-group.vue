<template>
  <ul class="dr-option-group">
    <li class="dr-option-group-title">
      {{label}}
    </li>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'DrOptionGroup',
  props: {
    label: String
  }
};
</script>
