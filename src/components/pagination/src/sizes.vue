<template>
  <div class="dr-pagination-sizes">
    <dr-select
      v-model="currentSize"
      @change="sizeChange"
      :disabled="disabled"
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
import DrOption from '../../option';

export default {
  props: {
    showSizer: Boolean,
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: Boolean
  },
  components: {
    DrSelect,
    DrOption
  },
  data() {
    return {
      currentSize: 10
    };
  },
  methods: {
    sizeChange(size) {
      this.$parent.changeSize(size);
    }
  }
};
</script>
