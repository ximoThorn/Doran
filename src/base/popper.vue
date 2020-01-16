<template>
  <div class="dr-popper">
    <slot></slot>
  </div>
</template>

<script>
import popper from '@/mixins/popper.js';

export default {
  name: 'DrPopper',
  mixins: [popper],
  props: {
    placement: {
      type: String,
      default: 'bottom-start'
    }
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
            offset: '0, 5px'
          },
          preventOverflow: {
            boundariesElement: 'window'
          }
        },
        onCreate: () => {
          _this.resetTransformOrigin();
          _this.$nextTick(() => {
            _this.currentPopper && _this.currentPopper.scheduleUpdate();
          });
        },
        onUpdate: () => {
          this.resetTransformOrigin();
        }
      });
    },
    popperDetory() {
      if (this.currentPopper) {
        setTimeout(() => { // 动画结束后才销毁popper
          this.currentPopper.destroy();
          this.currentPopper = null;
        }, 330);
      };
    }
  }
};
</script>
