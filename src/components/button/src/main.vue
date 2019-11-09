<template>
  <button
    :class="classes"
    @click="handleClick"
    :disabled="disabled">
    <DrIcon icon="dr-icon-loading"
      v-if="loading"
      spin>
    </DrIcon>
    <DrIcon :icon="icon"
      v-if="!loading && icon">
    </DrIcon>
    <span
      v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import DrIcon from '../../icon';

const btnPreFix = 'dr-button';
export default {
  name: 'DrButton',
  props: {
    type: {
      type: String
    },
    hollow: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    round: {
      type: Boolean
    },
    circle: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    icon: {
      type: String
    }
  },
  components: {
    DrIcon
  },
  computed: {
    classes() {
      return [
        `${btnPreFix}`,
        `${btnPreFix}-${this.type || 'default'}`,
        {
          [`${btnPreFix}-hollow`]: this.hollow,
          [`${btnPreFix}-${this.size}`]: !!this.size,
          [`${btnPreFix}-round`]: this.round,
          [`${btnPreFix}-circle`]: this.circle,
          [`${btnPreFix}-disabled`]: this.disabled
        }
      ];
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
}
</script>

<style lang="scss">
.dr-button {
  span {
    vertical-align: middle;
  }
}
</style>
