<template>
  <div :class="classes">
    <component
      :is="componentMaps[key]"
      :disabled="disabled"
      :currentPage="currentPage"
      :small="small"
      :prevText="prevText"
      :nextText="nextText"
      :allPage="allPage"
      :total="total"
      :pageSizes="pageSizes"
      :pageSize="pageSize"
      v-for="key in layout"
      :key="key">
    </component>
  </div>
</template>

<script>
import pageItem from './pager.vue';
import pageSizes from './sizes.vue';
import pageJumper from './jumper.vue';
import simplePager from './simplePager.vue';
import pageTotal from './total.vue';

const drPreFixPagination = 'dr-pagination';

const componentMaps = {
  total: pageTotal,
  jumper: pageJumper,
  sizes: pageSizes,
  simplePager: simplePager,
  pager: pageItem
}

export default {
  name: 'DrPagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50, 100];
      }
    },
    disabled: Boolean,
    small: Boolean,
    prevText: String,
    nextText: String,
    layout: {
      type: Array,
      default() {
        return ['total', 'pager', 'sizes', 'jumper'];
      }
    }
  },
  data() {
    return {
      componentMaps
    }
  },
  computed: {
    classes() {
      return [
        `${drPreFixPagination}-default`,
        {
          [`${drPreFixPagination}-disabled`]: this.disabled
        }
      ];
    },
    allPage() {
      const num = this.total / this.pageSize;
      return Math.ceil(num);
    }
  },
  methods: {
    changePage(page) {
      if (this.disabled) {
        return;
      };
      this.$emit('update:currentPage', page); // 支持.sync
      this.$emit('currentChange', page);
    },
    changeSize(size) {
      if (this.disabled) {
        return;
      };
      this.changePage(1);
      this.$emit('update:pageSize', size); // 支持.sync
      this.$emit('sizeChange', size);
    },
    prevClick() {
      this.$nextTick(() => { // 改变当前页后触发，返回改变后的当前页
        this.$emit('prevClick', this.currentPage);
      });
    },
    nextClick() {
      this.$nextTick(() => { // 改变当前页后触发，返回改变后的当前页
        this.$emit('nextClick', this.currentPage);
      });
    }
  }
};
</script>
