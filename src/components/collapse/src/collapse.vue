<template>
  <div class="dr-collapse">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'DrCollapse',
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeValues: this.value
    };
  },
  mounted() {
    this.setActive();
  },
  methods: {
    setActive() {
      const collapseValues = this.initValues();
      this.$nextTick(() => {
        this.$children.forEach(element => {
          if (element.$options.name === 'DrCollapseItem') {
            element.isActive = collapseValues.includes(element.name);
          }
        });
      });
    },
    initValues() {
      let values = this.activeValues || [];
      if (this.accordion && values.length > 1) { // 手风琴模式下，数组length>1，默认取第一个
        values = [values[0]];
      };
      return values;
    },
    toggle(obj) {
      let _arr = [];
      if (this.accordion) { // 手风琴模式
        if (!obj.isActive) {
          _arr.push(obj.currentName)
        };
      } else {
        const collapseValues = this.initValues();
        const toggleIndex = collapseValues.indexOf(obj.currentName);
        if (obj.isActive) {
          toggleIndex > -1 && collapseValues.splice(toggleIndex, 1);
        } else {
          toggleIndex < 0 && collapseValues.push(obj.currentName);
        };
        _arr = collapseValues;
      };
      this.$emit('input', _arr);
      this.$emit('change', _arr);
    }
  },
  watch: {
    value(newValue) {
      this.activeValues = newValue;
      this.setActive();
    }
  }
}
</script>
