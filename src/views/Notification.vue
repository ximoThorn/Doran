<template>
  <div class="notification-page ">
    <p>基本用法</p>
    <div>
      <dr-button @click="openNotice">打开通知</dr-button>
    </div>
    <p>带状态的通知</p>
    <div>
      <dr-button style="margin-right: 10px;" @click="openStatusNotice('success')">success</dr-button>
      <dr-button style="margin-right: 10px;" @click="openStatusNotice('info')">info</dr-button>
      <dr-button style="margin-right: 10px;" @click="openStatusNotice('warning')">warning</dr-button>
      <dr-button @click="openStatusNotice('error')">error</dr-button>
    </div>
    <p>自定义时长</p>
    <div>
      <dr-button @click="openTimeNotice">打开通知</dr-button>
      <p style="margin-top: 10px">自定义时长，为 0 则不自动关闭</p>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    openNotice() {
      this.$Notice.open({
        title: '默认',
        message: '这是一条通知！',
        onClose() {
          console.log('关闭了！！！')
        }
      })
    },
    openStatusNotice(type) {
      switch (type) {
        case 'success':
          this.$Notice.open({
            type: 'success',
            title: '成功！',
            message: '这是一条成功的通知！',
            duration: 0
          })
          break;
        case 'info':
          this.$Notice.open({
            type: 'info',
            title: '描述！',
            message: '这是一条描述的通知！'
          })
          break;
        case 'warning':
          this.$Notice.warning({
            title: '警告！',
            message: '这是一条警告的通知！'
          })
          break;
        case 'error':
          this.$Notice.error({
            title: '错误！',
            message: '这是一条错误的通知！'
          })
          break;
      }
    },
    openTimeNotice() {
      this.$Notice.open({
        title: '自定义时长',
        message: '我不会自动消失！',
        duration: 0,
        onClick() {
          console.log('click')
        }
      }).then(_this => {
        console.log(_this, '返回当前的Notification的实例');
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .notification-page {
    margin: 20px 0 100px;
    > p {
      margin: 0 auto;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    > div {
      width: 600px;
      margin: 20px auto;
      text-align: center;
      .for-item {
        height: 28px;
        line-height: 28px;
      }
    }
  }
</style>
