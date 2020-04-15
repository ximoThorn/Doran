<template>
  <li
    @click="handlerClick"
    :class="classes">
    <slot></slot>
  </li>
</template>

<script>
const drPreFixItem = 'dr-dropdown-item';

export default {
  name: 'DrDropdownItem',
  props: {
    name: [String, Number],
    disabled: Boolean,
    divided: Boolean
  },
  data() {
    return {
      parent: ''
    };
  },
  computed: {
    classes() {
      return [
        `${drPreFixItem}`,
        {
          [`${drPreFixItem}-divided`]: this.divided,
          [`${drPreFixItem}-disabled`]: this.disabled
        }
      ]
    }
  },
  created() {
    this.parentInit();
  },
  methods: {
    parentInit() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name === 'DrDropdown') {
          this.parent = parent;
          return;
        } else {
          parent = parent.$parent;
        };
      };
    },
    handlerClick(e) {
      if (this.disabled) {
        e.stopPropagation();
        return;
      };
      this.parent.itemClick(this.name);
    }
  }
};
</script>
