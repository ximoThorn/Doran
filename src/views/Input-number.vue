<template>
  <div class="input-number-page">
    <p>基础用法</p>
    <div>
      <dr-input-number v-model="value1"></dr-input-number>
    </div>
    <p>设置数字范围</p>
    <div>
      <dr-input-number v-model="value2" :max="10" :min="0"></dr-input-number>
    </div>
    <p>设置step</p>
    <div>
      <dr-input-number v-model="value3" :step="1.2"></dr-input-number>
    </div>
    <p>禁用计数器</p>
    <div>
      <dr-input-number v-model="value4" disabled></dr-input-number>
    </div>
    <p>不可编辑</p>
    <div class="margin">
      <dr-input-number v-model="value5" :editable="false"></dr-input-number>
      <dr-input-number v-model="value5" :readonly="true"></dr-input-number>
    </div>
    <p>设置精度</p>
    <div>
      <dr-input-number v-model="value6" :precision="2"></dr-input-number>
    </div>
    <p>不同尺寸</p>
    <div>
      默认：<dr-input-number v-model="value7" :step="2"></dr-input-number>
      <br>
      <br>
      small：<dr-input-number v-model="value8" size="medium" :step="2"></dr-input-number>
      <br>
      <br>
      mini：<dr-input-number v-model="value9" size="small" :step="2"></dr-input-number>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 1,
      value2: 0,
      value3: 1,
      value4: 1,
      value5: 1,
      value6: 1,
      value7: 10,
      value8: 10,
      value9: 10
    }
  }
}
</script>

<style lang="scss" scoped>
  .input-number-page {
    margin: 20px auto 100px;
    > p {
      margin: 0 auto;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    > div {
      margin: 20px auto;
      text-align: center;
      &.margin {
        > div {
          margin-right: 20px;
        }
      }
    }
  }
</style>
