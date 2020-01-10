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
  mounted() {
    this.createPopper({
      placement: 'bottom-start',
      modifiers: {
        computeStyle: {
          gpuAcceleration: false
        },
        offset: {
          offset: '0, 5px'
        }
      }
    });
  }
};
</script>
