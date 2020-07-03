<template>
  <div>
    <div class="dr-popover-reference"
      @click="handlerClick"
      ref="reference">
      <slot></slot>
    </div>
    <transition name="popover-opacity">
      <DrPopper
        :transfer="transfer"
        :placement="placement"
        :visible="visible"
        v-show="visible"
        offset="0 12px"
        :showArrow="true"
        ref="popper"
        class="dr-popover-popper">
        <slot name="content">popover</slot>
      </DrPopper>
    </transition>
  </div>
</template>

<script>
import DrPopper from '@/base/popper';

import { validValue } from '@/utils/validate';
import emitter from '@/mixins/emitter';

export default {
  name: 'DrPopover',
  mixins: [emitter],
  props: {
    placement: {
      validator (value) {
        return validValue(value, ['top', 'bottom', 'top-start', 'bottom-start', 'top-end', 'bottom-end']);
      },
      default: 'top-start'
    },
    trigger: {
      validator (value) {
        return validValue(value, ['hover', 'click', 'contextMenu', 'custom']);
      },
      default: 'hover'
    },
    transfer: {
      type: Boolean,
      default() {
        return !!this.$DORAN.transfer
      }
    }
  },
  components: {
    DrPopper
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    classes() {
      return [];
    }
  },
  methods: {
    handlerClick() {
      this.visible = !this.visible;
    }
  },
  watch: {
    visible(newValue) {
      this.broadcast('DrPopper', newValue ? 'onUpdatePopper' : 'onDestoryPopper');
    }
  },
  beforeDestroy() {
    this.$refs.popper.removeChild(); // 销毁时移除popper的dom元素
  }
}
</script>
