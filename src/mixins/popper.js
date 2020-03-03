import Vue from 'vue';
const Popper = Vue.prototype.$isServer ? function() {} : require('popper.js/dist/umd/popper.js');

export default {
  data() {
    return {
      currentPopper: ''
    };
  },
  methods: {
    createPopper(optipns = {}) {
      if (this.$isServer) {
        return;
      };
      this.$nextTick(() => {
        if (this.currentPopper) {
          this.resetTransformOrigin();
          this.currentPopper.update();
        } else {
          const reference = this.$refs.reference || this.$parent.$refs.reference || '';
          const popperDom = this.$refs.popper || this.$el;
          this.currentPopper = new Popper(reference, popperDom, optipns);
        };
      });
    },
    resetTransformOrigin() { // 当popper的位置有变化时，更新动画的origin
      if (!this.currentPopper) {
        return;
      };
      let x_placement = this.currentPopper.popper.getAttribute('x-placement');
      let placementStart = x_placement.split('-')[0];
      let placementEnd = x_placement.split('-')[1];
      const leftOrRight = x_placement === 'left' || x_placement === 'right';
      if (!leftOrRight) {
        this.currentPopper.popper.style.transformOrigin = placementStart === 'bottom' || (placementStart !== 'top' && placementEnd === 'start') ? 'center top' : 'center bottom';
      };
    }
  }
}
