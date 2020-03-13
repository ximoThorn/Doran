<template>
  <div :class="classes">
    <!-- 进度条 start-->
    <div class="dr-progress-outer" v-if="type === 'line'">
      <div class="dr-progress-inner" :style="innerStyles">
        <div class="dr-progress-bar" :style="barStyles">
          <span class="dr-progress-inner-text" v-if="showText && textInside">
            {{percent}}%
          </span>
        </div>
      </div>
    </div>
    <!-- 进度条 end-->
    <!-- 进度环 start (因为本人对svg不熟悉， 所以这里照参考了element-ui)-->
    <div class="dr-progress-circle" :style="circleStyles" v-else>
      <svg viewBox="0 0 100 100">
        <path
          class="el-progress-circle-inner"
          :d="trackPath"
          stroke="#e5e9f2"
          :stroke-width="relativeStrokeWidth"
          fill="none"
          :style="trailPathStyle"></path>
        <path
          class="el-progress-circle-bar"
          :d="trackPath"
          :stroke="circleStroke"
          fill="none"
          :stroke-linecap="strokeLinecap"
          :stroke-width="percent ? relativeStrokeWidth : 0"
          :style="circlePathStyle"></path>
      </svg>
    </div>
    <!-- 进度环 end-->
    <span class="dr-progress-text">
      <span v-if="$slots.default && showText && !textInside">
        <slot></slot>
      </span>
      <span v-if="!$slots.default && showText && !textInside">
        <span v-if="!status">{{percent}}%</span>
        <DrIcon v-else :icon="statusIcon"></DrIcon>
      </span>
    </span>
  </div>
</template>

<script>
import DrIcon from '../../icon';
import { validValue, typeValide } from '@/utils/validate';

const drPreFixProgress = 'dr-progress';
const statusIconObj = {
  success: 'dr-icon-roundcheck',
  warning: 'dr-icon-warn',
  error: 'dr-icon-roundclose'
};

const svgPathColorObj = {
  success: '#19be6b',
  warning: '#ff9900',
  error: '#ed4014'
};

export default {
  name: 'DrProgress',
  props: {
    percent: Number,
    status: {
      validator(val) {
        const arr = ['success', 'warning', 'error', 'active'];
        return validValue(val, arr);
      }
    },
    type: {
      validator(val) {
        const arr = ['line', 'circle', 'dashboard'];
        return validValue(val, arr);
      },
      default: 'line'
    },
    showText: {
      type: Boolean,
      default: true
    },
    strokeWidth: {
      type: Number,
      default: 10
    },
    textInside: Boolean,
    strokeColor: {
      type: [String, Array],
      default: ''
    },
    width: {
      type: [String, Number],
      default: 126
    },
    progressColor: {
      type: Array,
      default() {
        return [];
      }
    },
    strokeLinecap: {
      validator(val) {
        const arr = ['butt', 'round', 'square'];
        return validValue(val, arr);
      },
      default: 'round'
    }
  },
  components: {
    DrIcon
  },
  computed: {
    statusIcon() {
      if (!this.status) {
        return '';
      };
      return statusIconObj[this.status];
    },
    classes() {
      let arr = [
        `${drPreFixProgress}-default`,
        {
          [`${drPreFixProgress}-show-text`]: this.showText && !this.textInside,
          [`${drPreFixProgress}-circle-default`]: this.type !== 'line'
        }
      ];
      this.status && arr.push(`${drPreFixProgress}-${this.status}`);
      return arr;
    },
    innerStyles() {
      let obj = {};
      this.strokeWidth && (obj.height = `${this.strokeWidth}px`);
      return obj;
    },
    barStyles() {
      let obj = {};
      const { strokeColor, progressColor } = this;
      this.percent !== undefined && (obj.width = `${this.percent}%`);
      if (strokeColor && !progressColor.length) { // 颜色、渐变色处理  progressColor的优先级高于strokeColor
        if (typeValide(strokeColor) === 'string') {
          obj.backgroundColor = strokeColor;
        };
        if (typeValide(strokeColor) === 'array') {
          let str = 'linear-gradient(to right';
          strokeColor.forEach(item => {
            str += `, ${item}`;
          });
          obj.backgroundImage = `${str})`;
        };
      };
      if (progressColor.length) { // progressColor颜色处理
        obj.backgroundColor = this.handleProgressColor(progressColor);
      };
      return obj;
    },
    circleStroke() { // 进度环填充色处理
      const { strokeColor, progressColor } = this;
      if (this.type !== 'line') {
        if (progressColor.length) { // progressColor颜色处理
          return this.handleProgressColor(progressColor.slice()); // slice()一下防止无限循环
        } else if (strokeColor && typeValide(strokeColor) === 'string') {
          return strokeColor;
        };
      };
      return svgPathColorObj[this.status] || '#2d8cf0';
    },
    circleStyles() {
      let obj = {};
      if (this.width) {
        obj.width = `${this.width}px`;
        obj.height = obj.width;
      };
      return obj;
    },
    relativeStrokeWidth() {
      if (!this.width) {
        return +this.strokeWidth.toFixed(1);
      };
      return (this.strokeWidth / this.width * 100).toFixed(1);
    },
    radius() {
      if (this.type === 'circle' || this.type === 'dashboard') {
        return parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);
      } else {
        return 0;
      };
    },
    perimeter() {
      return 2 * Math.PI * this.radius;
    },
    rate() {
      return this.type === 'dashboard' ? 0.75 : 1;
    },
    trackPath() {
      const radius = this.radius;
      const isDashboard = this.type === 'dashboard';
      return `
          M 50 50
          m 0 ${isDashboard ? '' : '-'}${radius}
          a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '-' : ''}${radius * 2}
          a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '' : '-'}${radius * 2}
          `;
    },
    strokeDashoffset() {
      const offset = -1 * this.perimeter * (1 - this.rate) / 2;
      return `${offset}px`;
    },
    trailPathStyle() {
      return {
        strokeDasharray: `${(this.perimeter * this.rate)}px, ${this.perimeter}px`,
        strokeDashoffset: this.strokeDashoffset
      };
    },
    circlePathStyle() {
      return {
        strokeDasharray: `${this.perimeter * this.rate * (this.percent / 100)}px, ${this.perimeter}px`,
        strokeDashoffset: this.strokeDashoffset,
        transition: 'stroke-dashoffset .6s ease 0s, stroke-dasharray .6s ease 0s, stroke .6s ease 0s'
      };
    }
  },
  methods: {
    handleProgressColor(arr = []) {
      const { percent } = this;
      const colorArr = arr.sort((a, b) => a.percent - b.percent); // 排序
      for (let i = 0, len = colorArr.length; i < len; i++) {
        if (percent <= +colorArr[i].percent) {
          return colorArr[i].color;
        };
      };
      return colorArr[colorArr.length - 1].color;
    }
  }
}
</script>
