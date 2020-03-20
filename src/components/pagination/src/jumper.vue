<template>
  <div class="dr-pagination-jumper">
    <span>前往</span>
    <input
      @input="jumperInput"
      @keyup.enter="changePage"
      v-model="jumperPage"
      class="dr-pagination-jumper-num"
      type="text">
    <span>页</span>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      jumperPage: this.currentPage
    };
  },
  computed: {
    // jumperPage: {
    //   get() {
    //     return this.currentPage || 1;
    //   },
    //   set() {
    //     // this.$emit()
    //   }
    // }
  },
  methods: {
    jumperInput(e) {
      const target = e.target;
      const cacheValue = this.currentPage;
      const value = Number(target.value);
      if (isNaN(value)) {
        this.jumperPage = cacheValue;
      };
    },
    changePage() {
      this.$emit('enterChange', this.jumperPage);
    }
  }
};
</script>
