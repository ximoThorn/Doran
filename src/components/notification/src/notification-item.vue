<template>
  <transition name="notification" appear>
    <div @click="onClick" :class="classes">
      <div class="dr-notification-title">
        <i :class="iconClasses"></i>
        {{title}}
      </div>
      <div
        v-if="!dangerouslyUseHTMLString || message"
        class="dr-notification-message">
        {{message}}
      </div>
      <div
        v-else
        v-html="message"
        class="dr-notification-message">
      </div>
      <i
        v-if="showClose"
        @click="close"
        class="dr-icon-default dr-icon-close">
      </i>
    </div>
  </transition>
</template>

<script>
import { validValue } from '@/utils/validate';

const notificationPreFix = 'dr-notification'

const typsMap = {
  success: 'roundcheck',
  info: 'info',
  warning: 'warn',
  error: 'roundclose'
}

export default {
  name: 'DrNotification',
  props: {
    title: String,
    message: String,
    id: String,
    duration: {
      type: Number,
      default: 3000
    },
    type: {
      type: String,
      validator(val) {
        return validValue(val, ['success', 'info', 'warning', 'error', 'default']);
      },
      default: 'default'
    },
    onClose: Function,
    onClick: {
      type: Function,
      default: function () {}
    },
    showClose: {
      type: Boolean,
      default: true
    },
    customClass: String,
    iconType: String,
    dangerouslyUseHTMLString: Boolean
  },
  data() {
    return {
      clearTimer: undefined
    }
  },
  computed: {
    classes() {
      return [
        `${notificationPreFix}-default`,
        this.customClass,
        {
          [`${notificationPreFix}-${this.type}`]: this.type !== 'default'
        }
      ]
    },
    iconClasses() {
      return [
        'dr-icon-default',
        {
          [`dr-icon-${typsMap[this.type]}`]: this.type !== 'default',
          [`dr-icon-${this.iconType}`]: this.iconType && this.type === 'default'
        }
      ]
    }
  },
  mounted() {
    if (this.duration > 0) {
      this.clearTimer = setTimeout(() => {
        this.close();
      }, this.duration);
    }
  },
  methods: {
    close() {
      this.clearTimer && clearTimeout(this.clearTimer);
      this.onClose && this.onClose();
      this.$parent.close(this.id);
    }
  }
}
</script>
