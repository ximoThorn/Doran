<template>
  <div class="input-page">
    <p>基本用法</p>
    <div>
      <DrInput v-model="input1" placeholder="请输入"></DrInput>
    </div>
    <p>禁用状态</p>
    <div>
      <DrInput v-model="input2" disabled placeholder="doran"></DrInput>
    </div>
    <p>可清空</p>
    <div>
      <DrInput v-model="input3" clearable placeholder="请输入"></DrInput>
    </div>
    <p>密码框</p>
    <div>
      <DrInput v-model="input4" type="password" placeholder="请输入" password></DrInput>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: 'doran',
      input3: '',
      input4: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .input-page {
    margin: 20px auto 100px;
    > p {
      margin: 0 auto;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    > div {
      width: 500px;
      margin: 20px auto;
      text-align: center;
      > p {
        margin: 20px 0;
      }
    }
  }
</style>
