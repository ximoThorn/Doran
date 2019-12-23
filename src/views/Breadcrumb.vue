<template>
  <div class="breadcrumb-page">
    <p>基本用法</p>
    <div>
      <dr-breadcrumb separator="/">
        <dr-breadcrumb-item>home</dr-breadcrumb-item>
        <dr-breadcrumb-item>component</dr-breadcrumb-item>
        <dr-breadcrumb-item>breadcrumb</dr-breadcrumb-item>
      </dr-breadcrumb>
    </div>
    <p>设置分隔符</p>
    <div>
      <dr-breadcrumb separator="|">
        <dr-breadcrumb-item to="/">home</dr-breadcrumb-item>
        <dr-breadcrumb-item>component</dr-breadcrumb-item>
        <dr-breadcrumb-item>breadcrumb</dr-breadcrumb-item>
      </dr-breadcrumb>
      <br>
      <br>
      <dr-breadcrumb separator="<i>=></i>">
        <dr-breadcrumb-item to="/">home</dr-breadcrumb-item>
        <dr-breadcrumb-item>component</dr-breadcrumb-item>
        <dr-breadcrumb-item>breadcrumb</dr-breadcrumb-item>
      </dr-breadcrumb>
      <br>
      <br>
      <dr-breadcrumb separatorIcon="dr-icon-arrow-right">
        <dr-breadcrumb-item to="/">home</dr-breadcrumb-item>
        <dr-breadcrumb-item>component</dr-breadcrumb-item>
        <dr-breadcrumb-item>breadcrumb</dr-breadcrumb-item>
      </dr-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .breadcrumb-page {
    margin: 20px 0 100px;
    > p {
      margin: 0 auto;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    > div {
      width: 50%;
      margin: 20px auto;
      text-align: center;
    }
  }
</style>
