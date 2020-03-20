<template>
  <div class="dr-pagination-sizes">
    <dr-select
      v-model="currentSize"
      size="small">
      <dr-option
        v-for="(item, index) in pageSizes"
        :key="index"
        :label="`${item}条/页`"
        :value="item">
      </dr-option>
    </dr-select>
  </div>
</template>

<script>
import DrSelect from '../../select';
// import DrOption from '../../option';

export default {
  props: {
    showSizer: Boolean,
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50, 100];
      }
    }
  },
  components: {
    DrSelect
    // DrOption
  },
  data() {
    return {
      currentSize: 10
    };
  }
};
</script>
