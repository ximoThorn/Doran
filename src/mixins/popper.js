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
      if (this.currentPopper) {
        this.$nextTick(() => {
          this.currentPopper.update();
        });
      } else {
        const reference = this.$refs.reference || this.$parent.$refs.reference || '';
        const popperDom = this.$refs.popper || this.$el;
        this.$nextTick(() => {
          this.currentPopper = new Popper(reference, popperDom, optipns);
        });
      };
    }
  }
}
