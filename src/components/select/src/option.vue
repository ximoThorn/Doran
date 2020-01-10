<template>
  <li
    @click.stop="handlerSelectOption"
    :class="classes">
    <slot>
      <span>{{label}}</span>
    </slot>
  </li>
</template>

<script>
import emitter from '@/mixins/emitter';

const drFixPreOption = 'dr-option';

export default {
  name: 'DrOption',
  mixins: [emitter],
  props: {
    value: {},
    label: [String, Number],
    disabled: Boolean
  },
  data() {
    return {
      select: ''
    };
  },
  mounted() {
    this._parentInit();
  },
  computed: {
    classes() {
      return [
        `${drFixPreOption}-default`,
        {
          [`${drFixPreOption}-disabled`]: this.disabled,
          [`${drFixPreOption}-active`]: this.optionActive
        }
      ]
    },
    optionActive() {
      if (!this.select.multiple) {
        return this.value === this.select.value;
      } else {
        return this.select.value.indexOf(this.value);
      };
    }
  },
  methods: {
    _parentInit() {
      let parent = this.$parent;
      while (parent) {
        if (parent && parent.$options.name === 'DrSelect') {
          this.select = parent;
          return;
        } else {
          parent = parent.$parent;
        };
      };
    },
    handlerSelectOption() {
      if (this.disabled) {
        return;
      };
      this.dispatch('DrSelect', 'handlerClickOption', {
        value: this.value,
        label: this.label || ''
      });
    }
  }
};
</script>
