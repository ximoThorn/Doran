<template>
  <div :class="classes">
    <i
      @click.stop="prevOne"
      :class="{
        'dr-pagination-pager-prev-disabled': currentPage === 1
      }"
      class="dr-icon-default dr-icon-arrow-left">
    </i>
    <div class="dr-pagination-pager-label">
      <input
        @input="jumperInput"
        @keyup.enter="changePage"
        :disabled="disabled"
        :value="jumperPage"
        class="dr-pagination-jumper-num"
        type="text">
        <span>/</span>
        {{allPage}}
    </div>
    <i
      @click.stop="nextOne"
      :class="{
        'dr-pagination-pager-next-disabled': currentPage === allPage
      }"
      class="dr-icon-default dr-icon-arrow-right">
    </i>
  </div>
</template>

<script>
export default {
  props: {
    allPage: {
      type: Number,
      default: 1
    },
    currentPage: {
      type: Number,
      default: 1
    },
    disabled: Boolean
  },
  computed: {
    classes() {
      return [
        'dr-pagination-pager-simple',
        {
          'dr-pagination-pager-simple-disabled': this.disabled
        }
      ];
    },
    jumperPage() {
      return this.currentPage;
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
    },
    prevOne() {
      if (this.currentPage > 1) {
        this.$parent.changePage(this.currentPage - 1);
        this.$parent.prevClick();
      };
    },
    nextOne() {
      if (this.currentPage < this.allPage) {
        this.$parent.changePage(this.currentPage + 1);
        this.$parent.nextClick();
      };
    }
  }
}
</script>
