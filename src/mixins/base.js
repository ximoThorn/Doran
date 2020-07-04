export const arrowInit = {
  methods: {
    arrowInit(dom) {
      if (!this.placement.includes('start') && !this.placement.includes('end')) {
        return;
      }
      const isHorizontal = this.placement.includes('left') || this.placement.includes('right');
      const reference = this.$refs.reference;
      let range = '';
      if (isHorizontal) { // 如果popper 左右显示
        range = reference.clientHeight / 2;
        if (this.placement.includes('end')) {
          dom.style.bottom = `${range}px`;
        } else {
          dom.style.top = `${range}px`;
        }
      } else { // 上下显示
        range = reference.clientWidth / 2;
        if (this.placement.includes('end')) {
          dom.style.right = `${range}px`;
        } else {
          dom.style.left = `${range}px`;
        }
      }
    }
  }
}
