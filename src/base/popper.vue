<template>
  <div
    v-transfer-dom="transfer"
    :data-transfer="transfer"
    :style="`z-index: ${zIndex};`"
    class="dr-popper">
    <slot></slot>
  </div>
</template>

<script>
import popper from '@/mixins/popper.js';
import transferDom from '@/directives/body-append';

export default {
  name: 'DrPopper',
  mixins: [popper],
  directives: {
    transferDom
  },
  props: {
    placement: {
      type: String,
      default: 'bottom-start'
    },
    offset: {
      type: String,
      default: '0, 0px'
    },
    transfer: { // 是否将popper放置在body的最后面， 默认为true
      type: Boolean,
      default() {
        return !!this.$DORAN.transfer
      }
    }
  },
  data() {
    return {
      zIndex: this.$DORAN.zIndex
    };
  },
  created() {
    this.$on('onUpdatePopper', this.popperUpdate);
    this.$on('onDestoryPopper', this.popperDetory);
  },
  methods: {
    popperUpdate() {
      const _this = this;
      this.createPopper({
        placement: this.placement,
        modifiers: {
          computeStyle: {
            gpuAcceleration: false
          },
          offset: {
            offset: _this.offset
          },
          preventOverflow: {
            boundariesElement: 'window'
          }
        },
        onCreate: () => {
          _this.resetTransformOrigin();
        },
        onUpdate: () => {
          this.resetTransformOrigin();
        }
      });
    },
    popperDetory() {
      if (this.currentPopper) {
        setTimeout(() => { // 动画结束后才销毁popper
          this.currentPopper && this.currentPopper.destroy();
          this.currentPopper = null;
        }, 330);
      };
    }
  }
};
</script>
