<template>
  <div class="rate-page">
    <p>基本用法</p>
    <div>
      <dr-rate></dr-rate>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .rate-page {
    margin: 20px auto 100px;
    > p {
      margin: 0 auto;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    > div {
      width: 400px;
      margin: 20px auto;
      > p {
        margin: 20px 0;
        text-align: center;
      }
      > div {
        margin-right: 20px;
      }
    }
  }
</style>
