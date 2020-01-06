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
    <p>带icon的输入框</p>
    <div>
      属性方式：
      <DrInput class="view-input" v-model="input5" placeholder="日期" suffixIcon="dr-icon-calendar"></DrInput>
      <DrInput v-model="input6" placeholder="搜索" prefixIcon="dr-icon-search"></DrInput>
      <br>
      <br>
      slot 方式：
      <DrInput class="view-input" v-model="input7" placeholder="日期">
        <i slot="suffix" class="dr-icon-default dr-icon-calendar"></i>
      </DrInput>
      <DrInput v-model="input8" placeholder="搜索">
        <i slot="prefix" class="dr-icon-default dr-icon-search"></i>
      </DrInput>
    </div>
    <p>不同尺寸</p>
    <div>
      <DrInput v-model="inputSize" placeholder="单号" suffixIcon="dr-icon-scanlight"></DrInput>
      <br>
      <br>
      <DrInput size="medium" v-model="inputSize" placeholder="单号" suffixIcon="dr-icon-scanlight"></DrInput>
      <br>
      <br>
      <DrInput size="small"  v-model="inputSize" placeholder="单号" suffixIcon="dr-icon-scanlight"></DrInput>
    </div>
    <p>文本域</p>
    <div class="textarea-wrap">
      <DrInput type="textarea" v-model="input9" placeholder="请输入内容"></DrInput>
      <br>
      <br>
      <DrInput type="textarea" v-model="input10" placeholder="请输入内容" disabled></DrInput>
    </div>
    <p>限制输入长度</p>
    <div class="textarea-wrap">
      <DrInput v-model="input11" placeholder="请输入内容" maxlength="10" showWordLimit></DrInput>
      <br>
      <br>
      <DrInput type="textarea" v-model="input12" placeholder="请输入内容" maxlength="20" showWordLimit></DrInput>
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
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      input9: '',
      input10: '',
      input11: '',
      input12: '',
      inputSize: ''
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
      width: 600px;
      margin: 20px auto;
      text-align: center;
      .dr-input-default {
        width: 180px;
      }
      .view-input {
        margin-right: 20px;
      }
      &.textarea-wrap {
        .dr-input-default {
          width: 360px;
        }
      }
      > p {
        margin: 20px 0;
      }
    }
  }
</style>
