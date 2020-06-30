<template>
  <div class="dr-notices">
    <DrNotification v-for="item in notifications"
      :key="item.key"
      :title="item.title"
      :message="item.message" />
  </div>
</template>

<script>
import DrNotification from './notification-item.vue'

let num = 0;

function getUniKey () {
  const str = new Date().getTime()
  return `drNocificayion_${str}_${num++}`;
}

export default {
  components: {
    DrNotification
  },
  data() {
    return {
      notifications: []
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.notifications = ['素还真', '叶小钗']
    // }, 1000)
  },
  methods: {
    add(options = {}) {
      const key = getUniKey()
      let obj = {
        ...options,
        key
      }

      this.notifications.push(obj)
    }
  }
}
</script>
