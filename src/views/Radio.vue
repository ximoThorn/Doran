<template>
  <div class="radio-page">
    <p>单选按钮</p>
    <div>
      <DrRadio v-model="normalRadio" @change="handleChange" label="1">素还真</DrRadio>
      <DrRadio v-model="normalRadio" @change="handleChange" label="2">一页书</DrRadio>
      <DrRadio v-model="normalRadio" @change="handleChange" label="3">叶小钗</DrRadio>
    </div>
    <p>失效状态</p>
    <div>
      <DrRadio v-model="disabledRadio" :disabled="true" label="1">天迹</DrRadio>
      <DrRadio v-model="disabledRadio" :disabled="true" label="2">地冥</DrRadio>
      <DrRadio v-model="disabledRadio" :disabled="true" label="3">人觉</DrRadio>
    </div>
    <p>单选框组</p>
    <div>
      <DrRadioGroup v-model="radioGroup" @change="handleGroupChange">
        <DrRadio label="a">风之痕</DrRadio>
        <DrRadio label="b">倦收天</DrRadio>
        <DrRadio label="c">原无乡</DrRadio>
        <DrRadio label="d">乱世狂刀</DrRadio>
      </DrRadioGroup>
    </div>
    <p>单选按钮组</p>
    <div>
      <DrRadioGroup v-model="radioButtonGroup" type="button" @change="handleGroupChange">
        <DrRadio label="a">风之痕</DrRadio>
        <DrRadio label="b">倦收天</DrRadio>
        <DrRadio label="c">原无乡</DrRadio>
        <DrRadio label="d">乱世狂刀</DrRadio>
      </DrRadioGroup>
    </div>
    <p>带边框</p>
    <div>
      <DrRadio v-model="borderRadio1" label="1" border>剑子仙迹</DrRadio>
      <DrRadio v-model="borderRadio1" label="2" border>疏楼龙宿</DrRadio>
      <DrRadio v-model="borderRadio1" label="3" border>佛剑分说</DrRadio>
    </div>
    <p>带边框失效</p>
    <div>
      <DrRadio v-model="borderRadio2" :disabled="true" label="1" border>剑非道</DrRadio>
      <DrRadio v-model="borderRadio2" :disabled="true" label="2" border>任平生</DrRadio>
      <DrRadio v-model="borderRadio2" :disabled="false" label="3" border>霁无瑕</DrRadio>
    </div>
    <p>带边框不同尺寸(size属性只在border为true的时候生效)</p>
    <div>
      <DrRadio v-model="borderRadio3" label="1" border>剑非道</DrRadio>
      <DrRadio v-model="borderRadio3" size="medium" label="2" border>任平生</DrRadio>
      <DrRadio v-model="borderRadio3" size="small" label="3" border>霁无瑕</DrRadio>
      <DrRadio v-model="borderRadio3" disabled size="mini" label="4" border>剑非道</DrRadio>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      normalRadio: '1',
      disabledRadio: '1',
      radioGroup: 'a',
      borderRadio1: '1',
      borderRadio2: '1',
      borderRadio3: '1',
      radioButtonGroup: '1'
    };
  },
  methods: {
    handleChange(val) {
      console.log(val, '单选按钮')
    },
    handleGroupChange(val) {
      console.log(val, '单选组');
    }
  }
}
</script>

<style lang="scss" scoped>
.radio-page {
  margin: 20px 0 100px;
  > p {
    margin: 0 auto;
    text-align: center;
  }
  > div {
    width: 50%;
    margin: 20px auto;
    text-align: center;
  }
}
</style>
