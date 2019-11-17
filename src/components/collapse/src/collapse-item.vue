<template>
  <div :class="classes">
    <div class="dr-collapse-item-header" @click="handleClick">
      <div class="dr-collapse-item-title">
        <slot name="title"><span>{{title}}</span></slot>
      </div>
      <DrIcon
        v-if="!hideArrow"
        class="dr-collapse-item-arrow"
        :class="{
          'dr-collapse-item-arrow-active': isActive
        }"
        icon="dr-icon-arrow-right">
      </DrIcon>
    </div>
    <collapseTransition>
      <div class="dr-collapse-item-content" v-show="isActive">
        <div class="dr-collapse-item-content-slot">
          <slot></slot>
        </div>
      </div>
    </collapseTransition>
  </div>
</template>

<script>
import DrIcon from '../../icon';
import collapseTransition from '@/plugin/collapseTransition';

const preCollapseItem = 'dr-collapse';

export default {
  name: 'DrCollapseItem',
  props: {
    title: String,
    name: [String, Number],
    hideArrow: Boolean
  },
  components: {
    DrIcon,
    collapseTransition
  },
  computed: {
    classes() {
      return [
        `${preCollapseItem}-item`
      ];
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    handleClick() {
      const obj = {
        currentName: this.name,
        isActive: this.isActive
      };
      this.$parent.$options.name === 'DrCollapse' && this.$parent.toggle(obj);
    }
  }
}
</script>
