<template>
  <div>
    <p>基本用法</p>
    <div>
      <dr-button @click="openNotice">打开通知</dr-button>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    openNotice() {
      this.$Notice.open({
        title: '默认',
        message: '这是一条通知！'
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
