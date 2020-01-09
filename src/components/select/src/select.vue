<template>
  <div
    v-click-outside="handlerClickOutside"
    :class="classes">
    <div
      ref="reference"
      class="dr-select-wrap">
      <dr-input
        :placeholder="placeholder"
        :readonly="!filterable"
        @input="handlerInput"
        @click.native="handlerClick"
        v-model="currentValue"
        :class="inputClasses">
        <i slot="suffix" class="dr-icon-default dr-icon-arrow-right"></i>
      </dr-input>
    </div>
    <transition name="select-suggestion">
      <div
        v-show="isVisible"
        ref="popper"
        class="dr-select-poppper">
        popper <br>
        popper <br>
        popper
      </div>
    </transition>
    <slot></slot>
  </div>
</template>

<script>
import DrInput from '../../input';
import popper from '@/mixins/popper.js';
import { directive as clickOutside } from 'v-click-outside-x'; // 点击dom外部时

const drPreFixSelect = 'dr-select';
export default {
  name: 'DrSelect',
  mixins: [popper],
  directives: {
    clickOutside
  },
  props: {
    value: [String, Number],
    placeholder: {
      type: String,
      default: '请选择'
    },
    filterable: Boolean
  },
  data() {
    return {
      currentValue: '',
      isOnComposition: false,
      isVisible: false
    };
  },
  components: {
    DrInput
  },
  computed: {
    classes() {
      return [
        `${drPreFixSelect}-default`,
        {}
      ];
    },
    inputClasses() {
      return [
        `${drPreFixSelect}-input`,
        {
          [`${drPreFixSelect}-visible`]: this.isVisible
        }
      ];
    }
  },
  mounted() {
    this.$nextTick(this.createPopper({
      placement: 'bottom-start',
      modifiers: {
        computeStyle: {
          gpuAcceleration: false
        },
        offset: {
          offset: '0, 5px'
        }
      }
    }));
  },
  methods: {
    handlerInput(val) {
      console.log(val);
    },
    handlerClick() {
      this.isVisible = !this.isVisible;
    },
    handlerClickOutside() {
      this.isVisible = false;
    }
  }
};
</script>
