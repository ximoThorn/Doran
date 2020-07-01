<template>
  <div class="dr-notices">
    <DrNotification v-for="item in notifications"
      :key="item.key"
      :id="item.key"
      :title="item.title"
      :type="item.type"
      :duration="item.duration"
      :onClose="item.onClose"
      :onClick="item.onClick"
      :showClose="item.showClose"
      :iconType="item.iconType"
      :customClass="item.customClass"
      :ref="item.key"
      :dangerouslyUseHTMLString="item.dangerouslyUseHTMLString"
      :message="item.message" />
  </div>
</template>

<script>
import DrNotification from './notification-item.vue'

let num = 0;

function getUniKey () { // 生成唯一的key
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
  methods: {
    add(options = {}, type) {
      const key = getUniKey()
      let obj = {
        ...options,
        key
      }
      type && (obj.type = type);

      this.notifications.push(obj)

      return new Promise((resolve, reject) => { // 返回当前Notification的实例
        this.$nextTick(() => {
          resolve(this.$refs[key][0])
        })
      })
    },
    close(id) {
      const index = this.notifications.findIndex(item => item.key === id);
      this.notifications.splice(index, 1);
    }
  }
}
</script>
