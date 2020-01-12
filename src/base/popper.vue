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
          this.resetTransformOrigin();
          this.$nextTick(() => {
            this.currentPopper && this.currentPopper.update();
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
        }, 350);
      };
    },
    resetTransformOrigin() { // 当popper的位置有变化时，更新动画的origin
      let x_placement = this.currentPopper.popper.getAttribute('x-placement');
      let placementStart = x_placement.split('-')[0];
      let placementEnd = x_placement.split('-')[1];
      const leftOrRight = x_placement === 'left' || x_placement === 'right';
      if (!leftOrRight) {
        this.currentPopper.popper.style.transformOrigin = placementStart === 'bottom' || (placementStart !== 'top' && placementEnd === 'start') ? 'center top' : 'center bottom';
      }
    }
  }
};
</script>
