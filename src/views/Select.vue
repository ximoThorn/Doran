<template>
  <div class="select-page">
    <p>基本用法</p>
    <div>
      <dr-select>
        <dr-option></dr-option>
      </dr-select>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .select-page {
    margin: 20px auto 100px;
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
      .dr-select-default {
        width: 240px;
      }
      .view-select {
        margin-right: 20px;
      }
      > p {
        margin: 20px 0;
      }
    }
  }
</style>
