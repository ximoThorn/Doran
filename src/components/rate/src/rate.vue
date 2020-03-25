<template>
  <div :class="classes">
    <div class="dr-rate-wrap" @mouseleave="handlerLeave">
      <span
        class="dr-rate-item"
        @mousemove="handlerMove(num)"
        @click="handlerClick(num)"
        v-for="num in count"
        :key="num">
        <i
          :class="iconClasses"
          class="dr-rate-icon"
          :style="iconStyles(num)">
          <i
            :class="iconClasses"
            v-if="allowHalf"
            :style="iconHalfStyles(num)"
            class="dr-rate-icon-half">
          </i>
        </i>
      </span>
    </div>
    <div class="dr-rate-text" :style="{color: finnalColor}">
      <slot v-if="value">
        <span>{{activeNum || value}}</span>
      </slot>
    </div>
  </div>
</template>

<script>
const drPreFixRate = 'dr-rate';

export default {
  name: 'DrRate',
  props: {
    value: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 5
    },
    icon: {
      type: String,
      default: 'dr-icon-favorfill'
    },
    activeColor: { // 选中时的颜色
      type: String,
      default: '#f5a623'
    },
    colors: { // [{color: '', rate: 0}]设置每个分段的颜色
      type: Array,
      default() {
        return [];
      }
    },
    unColor: String, // 未选中时的颜色
    customIcon: String,
    allowHalf: Boolean,
    disabled: Boolean
  },
  data() {
    return {
      activeNum: ''
    };
  },
  computed: {
    classes() {
      return [
        `${drPreFixRate}-default`,
        {
          [`${drPreFixRate}-disabled`]: this.disabled
        }
      ];
    },
    iconClasses() {
      return [
        'dr-icon-default',
        {
          [`${this.icon}`]: !!this.icon,
          [`${this.customIcon}`]: !!this.customIcon
        }
      ];
    },
    finnalColor() {
      return this.handlerProgressColor() || this.activeColor;
    },
    iconHalfStyles() {
      if (!this.allowHalf) {
        return '';
      };
      return (num) => {
        let obj = {
          color: this.handlerHalfColor(num)
        };
        if (num === Math.ceil(this.value)) {
          const widthNum = this.value * 100 - Math.floor(this.value) * 100;
          obj.width = `${widthNum}%`;
        };
        return obj;
      };
    },
    iconStyles() {
      return (num) => {
        let obj = {};
        const color = this.handlerColor(num);
        color && (obj.color = color);
        return obj;
      };
    }
  },
  methods: {
    handlerColor(num) { // 第一层icon的颜色
      const index = this.activeNum || (this.allowHalf ? Math.floor(this.value) : Math.ceil(this.value));
      if (num <= index) {
        return this.handlerProgressColor() || this.activeColor;
      };
      return this.unColor;
    },
    handlerHalfColor(num) { // 第二层icon的颜色
      const index = this.activeNum || Math.ceil(this.value);
      if (num <= index) {
        return this.handlerProgressColor() || this.activeColor;
      };
      return this.unColor;
    },
    handlerProgressColor() { // 处理分段颜色
      if (!this.colors.length) {
        return '';
      };
      const num = this.activeNum || this.value;
      const colorsArray = this.colors.slice().sort((a, b) => a.rate - b.rate);
      for (let i = 0, len = colorsArray.length; i < len; i++) {
        if (num <= +colorsArray[i].rate) {
          return colorsArray[i].color;
        };
      };
      return colorsArray[colorsArray.length - 1].color;
    },
    handlerClick(num) {
      if (this.disabled) {
        return;
      };
      this.$emit('input', num);
      this.$emit('change', num);
    },
    handlerMove(num) {
      if (this.disabled) {
        return;
      };
      this.activeNum = num;
    },
    handlerLeave() {
      if (this.disabled) {
        return;
      };
      this.activeNum = '';
    }
  }
}
</script>
