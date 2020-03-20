<template>
  <div :class="classes">
    <page-item></page-item>
    <page-sizes></page-sizes>
    <page-jumper></page-jumper>
  </div>
</template>

<script>
import pageItem from './pager.vue';
import pageSizes from './sizes.vue';
import pageJumper from './jumper.vue';

const drPreFixPagination = 'dr-pagination';

export default {
  name: 'DrPagination',
  props: {

  },
  components: {
    pageItem,
    pageSizes,
    pageJumper
  },
  computed: {
    classes() {
      return [
        `${drPreFixPagination}-default`,
        {}
      ];
    }
  }
};
</script>
