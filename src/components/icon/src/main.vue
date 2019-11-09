<template>
  <i
    v-if="icon"
    :class="classes"
    :style="styles"
    @click="handleClick">
  </i>
</template>

<script>
const iconPreFix = 'dr-icon';
export default {
  name: 'DrIcon',
  props: {
    icon: {
      type: String
    },
    spin: Boolean,
    size: [String, Number],
    color: String
  },
  computed: {
    classes() {
      return [
        this.icon,
        {
          [`${iconPreFix}-default`]: true,
          [`${iconPreFix}-spin`]: this.spin
        }
      ];
    },
    styles() {
      let styles = {};
      this.size && (styles['font-size'] = `${this.size}px`);
      this.color && (styles['color'] = this.color);
      return styles;
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
}
</script>

<style lang="scss">

</style>
