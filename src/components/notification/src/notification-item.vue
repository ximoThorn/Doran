<template>
  <transition name="notification" appear>
    <div :class="classes">
      {{title}}
      <br/>
      {{message}}
    </div>
  </transition>
</template>

<script>
const notificationPreFix = 'dr-notification'

export default {
  name: 'DrNotification',
  props: {
    title: String,
    message: String
  },
  computed: {
    classes() {
      return [
        `${notificationPreFix}-default`
      ]
    }
  }
}
</script>
