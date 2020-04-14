<template>
  <ul :class="classes">
    <li
      v-if="prevText"
      @click.stop="prevOne"
      class="dr-pagination-pager-prev dr-pagination-pager-item"
      :class="{
        'dr-pagination-pager-item-disabled': currentPage === 1
      }">
      {{prevText}}
    </li>
    <li
      v-if="!prevText"
      @click.stop="prevOne"
      class="dr-pagination-pager-prev dr-pagination-pager-item"
      :class="{
        'dr-pagination-pager-item-disabled': currentPage === 1
      }">
      <i class="dr-icon-default dr-icon-arrow-left"></i>
    </li>
    <li
      @click.stop="changePage(1)"
      class="dr-pagination-pager-item"
      :class="{
      'dr-pagination-pager-active': currentPage === 1
      }">
      1
    </li>
    <li
      v-if="currentPage > 5"
      @click.stop="prevMore"
      class="dr-pagination-pager-more dr-pagination-pager-item">
      <i class="dr-icon-default dr-icon-more"></i>
      <i class="dr-icon-default dr-icon-arrows-left"></i>
    </li>
    <li v-if="currentPage === 5" @click.stop="changePage(currentPage - 3)" class="dr-pagination-pager-item">{{currentPage - 3}}</li>
    <li v-if="currentPage > 3" @click.stop="changePage(currentPage - 2)" class="dr-pagination-pager-item">{{currentPage - 2}}</li>
    <li v-if="currentPage > 2" @click.stop="changePage(currentPage - 1)" class="dr-pagination-pager-item">{{currentPage - 1}}</li>
    <li v-if="currentPage !== 1 && currentPage !== allPage" class="dr-pagination-pager-active dr-pagination-pager-item">{{currentPage}}</li>
    <li v-if="allPage - currentPage > 1" @click.stop="changePage(currentPage + 1)" class="dr-pagination-pager-item">{{currentPage + 1}}</li>
    <li v-if="allPage - currentPage > 2" @click.stop="changePage(currentPage + 2)" class="dr-pagination-pager-item">{{currentPage + 2}}</li>
    <li v-if="allPage - currentPage === 4" @click.stop="changePage(currentPage + 3)" class="dr-pagination-pager-item">{{currentPage + 3}}</li>
    <li
      v-if="allPage - currentPage >= 5"
      @click.stop="nextMore"
      class="dr-pagination-pager-more dr-pagination-pager-item">
      <i class="dr-icon-default dr-icon-more"></i>
      <i class="dr-icon-default dr-icon-arrows-right"></i>
    </li>
    <li
      v-if="allPage > 1"
      @click.stop="changePage(allPage)"
      class="dr-pagination-pager-item"
      :class="{
      'dr-pagination-pager-active': currentPage === allPage
      }">
      {{allPage}}
    </li>
    <li
      v-if="nextText"
      @click.stop="nextOne"
      class="dr-pagination-pager-next dr-pagination-pager-item"
      :class="{
        'dr-pagination-pager-item-disabled': currentPage === allPage
      }">
      {{nextText}}
    </li>
    <li
      v-if="!nextText"
      @click.stop="nextOne"
      class="dr-pagination-pager-next dr-pagination-pager-item"
      :class="{
        'dr-pagination-pager-item-disabled': currentPage === allPage
      }">
      <i class="dr-icon-default dr-icon-arrow-right"></i>
    </li>
  </ul>
</template>

<script>
const drPreFixPager = 'dr-pagination-pager';

export default {
  inheritAttrs: false,
  props: {
    allPage: {
      type: Number,
      default: 1
    },
    currentPage: {
      type: Number,
      default: 1
    },
    disabled: Boolean,
    small: Boolean,
    prevText: String,
    nextText: String
  },
  data() {
    return {
    };
  },
  computed: {
    classes() {
      return [
        `${drPreFixPager}`,
        {
          [`${drPreFixPager}-disabled`]: this.disabled,
          [`${drPreFixPager}-small`]: this.small
        }
      ];
    }
  },
  methods: {
    changePage(page) {
      if (this.disabled) {
        return;
      };
      this.$parent.changePage(page);
    },
    prevMore() {
      this.currentPage > 5 && this.$parent.changePage(this.currentPage - 5);
    },
    nextMore() {
      this.allPage - this.currentPage >= 5 && this.$parent.changePage(this.currentPage + 5);
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
};
</script>
