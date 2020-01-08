<template>
  <div :class="classes">
    <div class="dr-select-wrap">
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

    </transition>
    <slot></slot>
  </div>
</template>

<script>
import DrInput from '../../input';

const drPreFixSelect = 'dr-select';
export default {
  name: 'DrSelect',
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
  methods: {
    handlerInput(val) {
      console.log(val);
    },
    handlerClick() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>
