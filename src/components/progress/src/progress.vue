<template>
  <div :class="classes">
    <div class="dr-progress-outer">
      <div class="dr-progress-inner" :style="innerStyles">
        <div class="dr-progress-bar" :style="barStyles">
          <span class="dr-progress-inner-text" v-if="showText && textInside">
            {{percent}}%
          </span>
        </div>
      </div>
    </div>
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
    showText: {
      type: Boolean,
      default: true
    },
    strokeWidth: Number,
    textInside: Boolean,
    strokeColor: [String, Array],
    progressColor: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  comments: {
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
          [`${drPreFixProgress}-show-text`]: this.showText && !this.textInside
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
      }
      return obj;
    }
  },
  methods: {
    handleProgressColor(arr = []) {
      const { percent } = this;
      const colorArr = arr.sort((a, b) => a.percentage - b.percentage); // 排序
      for (let i = 0, len = colorArr.length; i < len; i++) {
        if (percent <= +colorArr[i].percentage) {
          return colorArr[i].color;
        }
      }
      return colorArr[colorArr.length - 1].color;
    }
  }
}
</script>
