<template>
  <div :class="classes">
    <span>前往</span>
    <input
      @input="jumperInput"
      @keyup.enter="changePage"
      :disabled="disabled"
      :value="jumperPage"
      class="dr-pagination-jumper-num"
      type="text">
    <span>页</span>
  </div>
</template>

<script>
const drPreFixJumper = 'dr-pagination-jumper';

export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    disabled: Boolean
  },
  computed: {
    jumperPage() {
      return this.currentPage;
    },
    classes() {
      return [
        `${drPreFixJumper}`,
        {
          [`${drPreFixJumper}-disabled`]: this.disabled
        }
      ];
    }
  },
  methods: {
    jumperInput(e) {
      if (this.disabled) {
        return;
      };
      const target = e.target;
      const cacheValue = this.currentPage;
      const value = Number(target.value);
      if (isNaN(value) || target.value === '0') {
        target.value = cacheValue;
      };
    },
    changePage(e) {
      const value = Number(e.target.value);
      if (this.disabled || value > this.allPage) {
        return;
      };
      this.$parent.changePage(value);
    }
  }
};
</script>
