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
import { validValue } from '@/utils/validate';

const btnPreFix = 'dr-button';
export default {
  name: 'DrButton',
  props: {
    type: {
      validator(value) {
        const arr = ['default', 'primary', 'info', 'success', 'warning', 'error', 'dashed', 'text'];
        return validValue(value, arr);
      },
      default: 'default'
    },
    hollow: {
      type: Boolean,
      default: false
    },
    size: {
      validator(value) {
        const arr = ['default', 'medium', 'small', 'mini'];
        return validValue(value, arr);
      },
      default: 'default'
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
    btnSize() {
      return this.size || this.sizeInherit || 'default';
    },
    classes() {
      return [
        `${btnPreFix}`,
        `${btnPreFix}-${this.type}`,
        {
          [`${btnPreFix}-hollow`]: this.hollow,
          [`${btnPreFix}-${this.btnSize}`]: this.btnSize !== 'default',
          [`${btnPreFix}-round`]: this.round,
          [`${btnPreFix}-circle`]: this.circle,
          [`${btnPreFix}-disabled`]: this.disabled
        }
      ];
    }
  },
  data() {
    return {
      sizeInherit: ''
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
}
</script>
