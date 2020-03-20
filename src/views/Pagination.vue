<template>
  <div class="pagination-page">
    <p></p>
    <div>
      <dr-pagination></dr-pagination>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.pagination-page {
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
    }
  }
</style>
