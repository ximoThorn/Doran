<template>
  <div class="dr-tooltip">
    <div class="dr-tooltip-reference"
      @mouseenter="handlerMouseEnter"
      @mouseleave="handlerMouseLeave"
      ref="reference">
      <slot></slot>
    </div>
    <transition name="popover-opacity">
      <DrPopper
        @mouseenter.native="handlerMouseEnter"
        @mouseleave.native="handlerMouseLeave"
        :transfer="transfer"
        :placement="placement"
        :visible="isVisible"
        v-show="isVisible"
        :offset="`0 ${offset}px`"
        :showArrow="showArrow"
        :style="{width: `${width}px`}"
        ref="popper"
        :class="classes">
        <div class="dr-tooltip-content">
          <slot name="content">
            {{content}}
          </slot>
        </div>
      </DrPopper>
    </transition>
  </div>
</template>

<script>
import DrPopper from '@/base/popper';
// import { directive as clickOutside } from 'v-click-outside-x'; // 点击dom外部时

import { validValue } from '@/utils/validate';
import emitter from '@/mixins/emitter';
import { arrowInit } from '@/mixins/base';

const tooltipPreFix = 'dr-tooltip'

export default {
  name: 'DrTooltip',
  // directives: {
  //   clickOutside
  // },
  mixins: [emitter, arrowInit],
  props: {
    placement: {
      validator (value) {
        const arr = ['top', 'bottom', 'top-start', 'bottom-start', 'top-end', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'];
        return validValue(value, arr);
      },
      default: 'top-start'
    },
    transfer: {
      type: Boolean,
      default() {
        return !!this.$DORAN.transfer
      }
    },
    offset: {
      type: Number,
      default: 12
    },
    content: String,
    showArrow: {
      type: Boolean,
      default: true
    },
    tooltipClass: String,
    width: Number,
    disabled: Boolean
  },
  components: {
    DrPopper
  },
  data() {
    return {
      isVisible: this.visible,
      timeOut: ''
    }
  },
  computed: {
    classes() {
      return [
        `${tooltipPreFix}-popper`,
        this.tooltipClass
      ]
    }
  },
  methods: {
    handlerMouseEnter() {
      if (this.disabled) {
        return;
      }
      // 延迟出现，防止鼠标快速hover时的显示bug
      // 移入或者移出的时候互相清除对方内部的计时器，执行自己内部的计时器
      this.timeOut && clearTimeout(this.timeOut);
      this.timeOut = setTimeout(() => {
        this.isVisible = true;
      }, 251);
    },
    handlerMouseLeave() {
      // if (this.disabled) {
      //   return;
      // }
      this.timeOut && clearTimeout(this.timeOut);
      this.timeOut = setTimeout(() => {
        this.isVisible = false;
      }, 150);
    }
  },
  watch: {
    isVisible(newValue) {
      this.broadcast('DrPopper', newValue ? 'onUpdatePopper' : 'onDestoryPopper');
      if (newValue) {
        this.arrowInit(this.$refs.popper.$refs.arrow);
      }
    },
    visible(newValue) {
      if (this.trigger !== 'custom') {
        return;
      }
      this.broadcast('DrPopper', newValue ? 'onUpdatePopper' : 'onDestoryPopper');
      if (newValue) {
        this.arrowInit(this.$refs.popper.$refs.arrow);
      }
    }
  },
  beforeDestroy() {
    this.$refs.popper.removeChild(); // 销毁时移除popper的dom元素
  }
}
</script>
