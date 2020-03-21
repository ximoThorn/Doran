<template>
  <div :class="classes">
    <span>前往</span>
    <input
      @input="jumperInput"
      @keyup.enter="changePage"
      :disabled="disabled"
      v-model="jumperPage"
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
    jumperPage: {
      get() {
        return this.currentPage;
      },
      set() {}
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
        this.jumperPage = cacheValue;
      };
    },
    changePage() {
      if (this.disabled) {
        return;
      };
      this.$parent.changePage(Number(this.jumperPage));
    }
  }
};
</script>
