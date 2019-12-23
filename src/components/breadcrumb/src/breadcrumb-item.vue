<template>
  <span class="dr-breadcrumb-item">
    <span @click.stop='handleClick' class="dr-breadcrumb-label">
      <slot></slot>
    </span>
    <DrIcon v-if="separatorIcon" :icon="separatorIcon"></DrIcon>
    <span v-else class="dr-breadcrumb-separator" v-html="separatorHtml"></span>
  </span>
</template>

<script>
import DrIcon from '../../icon';

export default {
  name: 'DrBreadcrumbItem',
  props: {
    to: String,
    replace: Boolean
  },
  data() {
    return {
      separatorHtml: '',
      separatorIcon: ''
    };
  },
  components: {
    DrIcon
  },
  mounted() {
    this.parentInit();
  },
  methods: {
    parentInit() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name === 'DrBreadcrumb') {
          this.separatorHtml = parent.separator;
          this.separatorIcon = parent.separatorIcon;
          return;
        } else {
          parent = parent.$parent;
        };
      };
    },
    handleClick(e) {
      if (this.to && this.$router) {
        this.replace ? this.$router.replace(this.to) : this.$router.push(this.to)
      } else {
        this.$emit('onClick', e);
      }
    }
  }
};
</script>
