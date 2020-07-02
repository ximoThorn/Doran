<template>
  <div>
    <div
      @click="handlerClick"
      ref="reference">
      <slot></slot>
    </div>
    <transition>
      <DrPopper
        :transfer="transfer"
        :placement="placement"
        v-show="visible"
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
  }
}
</script>
