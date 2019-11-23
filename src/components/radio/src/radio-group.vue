<template>
  <div class="dr-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DrRadioGroup',
  props: {
    value: [String, Number, Boolean],
    type: {
      validator(val) {
        return val === 'button';
      }
    }
  },
  mounted() {
    this.radioTypeInit();
  },
  methods: {
    radioTypeInit() {
    }
  }
}
</script>
