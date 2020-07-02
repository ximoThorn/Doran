<template>
  <div class="popover-page">
    <p>基本用法</p>
    <div>
      <dr-popover>
        <dr-button>激活</dr-button>
      </dr-popover>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.popover-page {
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
  }
}
</style>
