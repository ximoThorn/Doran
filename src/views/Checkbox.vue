<template>
  <div class="checkout-page">
    <p>基础用法</p>
    <div>
      <DrCheckbox v-model="checkoutBase" @change="handleChangeBase">素还真</DrCheckbox>
    </div>
    <p>基础用法,设置选中和未选中的值</p>
    <div>
      <DrCheckbox v-model="checkoutbase2" @change="handleChangeBase" trueLabel="不动城" falseLabel="其它">傲笑红尘</DrCheckbox>
    </div>
    <p>多选群组</p>
    <div>
      <DrCheckboxGroup v-model="checkoutGroupValues" @change="handleChangeValues">
        <DrCheckbox label="叶小钗">叶小钗</DrCheckbox>
        <DrCheckbox label="解锋镝">解锋镝</DrCheckbox>
        <DrCheckbox label="一页书">一页书</DrCheckbox>
        <DrCheckbox label="天迹">天迹</DrCheckbox>
        <DrCheckbox label="地冥" disabled>地冥</DrCheckbox>
        <DrCheckbox label="人觉" disabled>人觉</DrCheckbox>
      </DrCheckboxGroup>
    </div>
    <p>indeterminate 状态</p>
    <div>
      <div class="indeterminate-checkbox">
        <DrCheckbox
          v-model="indeterminateCheckAll"
          @change="handlerCheckAll"
          :indeterminate="indeterminateFlag">
          全选
        </DrCheckbox>
      </div>
      <DrCheckboxGroup v-model="checkoutIndeterminate" @change="handleIndeterminate">
        <DrCheckbox
          v-for="(item, index) in valuesInit"
          :key="index"
          :label="item">
          {{item.name}}
        </DrCheckbox>
      </DrCheckboxGroup>
    </div>
    <p>带边框</p>
    <div>
      <DrCheckbox v-model="borderCheckbox1" border>剑子仙迹</DrCheckbox>
      <DrCheckbox v-model="borderCheckbox2" border>疏楼龙宿</DrCheckbox>
      <DrCheckbox v-model="borderCheckbox3" border>佛剑分说</DrCheckbox>
    </div>
    <p>带边框失效和不同尺寸</p>
    <div>
      <DrCheckbox v-model="borderCheckbox4" disabled size="medium" border>剑非道</DrCheckbox>
      <DrCheckbox v-model="borderCheckbox5" disabled size="small" border>任平生</DrCheckbox>
      <DrCheckbox v-model="borderCheckbox6" size="mini" border>霁无瑕</DrCheckbox>
    </div>
    <p>带边框不同尺寸(size属性只在border为true的时候生效)</p>
    <div>
      <DrCheckboxGroup v-model="borderSizeCheckbox" size="medium">
        <DrCheckbox label="1" border>剑非道</DrCheckbox>
        <DrCheckbox label="2" border>任平生</DrCheckbox>
        <DrCheckbox label="3" border size="small">霁无瑕</DrCheckbox>
        <DrCheckbox label="4" border size="mini">剑非道</DrCheckbox>
      </DrCheckboxGroup>
    </div>
    <p>带边框按钮组</p>
    <div>
      <DrCheckboxGroup v-model="buttonCheckbox" type="button">
        <DrCheckbox label="剑非道">剑非道</DrCheckbox>
        <DrCheckbox label="任平生">任平生</DrCheckbox>
        <DrCheckbox label="霁无瑕">霁无瑕</DrCheckbox>
        <DrCheckbox label="红尘雪">红尘雪</DrCheckbox>
      </DrCheckboxGroup>
      <br>
      <br>
      <DrCheckboxGroup v-model="ButtonMediumCheckbox" size="medium" type="button">
        <DrCheckbox label="剑非道">剑非道</DrCheckbox>
        <DrCheckbox label="任平生">任平生</DrCheckbox>
        <DrCheckbox label="霁无瑕">霁无瑕</DrCheckbox>
        <DrCheckbox label="红尘雪">红尘雪</DrCheckbox>
      </DrCheckboxGroup>
      <br>
      <br>
      <DrCheckboxGroup v-model="ButtonSmallCheckbox" size="small" type="button">
        <DrCheckbox label="剑非道">剑非道</DrCheckbox>
        <DrCheckbox label="任平生">任平生</DrCheckbox>
        <DrCheckbox label="霁无瑕">霁无瑕</DrCheckbox>
        <DrCheckbox label="红尘雪">红尘雪</DrCheckbox>
      </DrCheckboxGroup>
      <br>
      <br>
      <DrCheckboxGroup v-model="ButtonMiniCheckbox" size="mini" type="button">
        <DrCheckbox label="剑非道">剑非道</DrCheckbox>
        <DrCheckbox label="任平生">任平生</DrCheckbox>
        <DrCheckbox label="霁无瑕">霁无瑕</DrCheckbox>
        <DrCheckbox label="红尘雪">红尘雪</DrCheckbox>
      </DrCheckboxGroup>
    </div>
  </div>
</template>

<script>
const valuesInit = [{ name: '麒麟星' }, { name: '苍鹰' }, { name: '云中兽' }, { name: '金狮' }, { name: '天虎令' }, { name: '炽风翼' }];

export default {
  data() {
    return {
      checkoutBase: false,
      checkoutbase2: '',
      checkoutGroupValues: ['叶小钗', '地冥'],
      indeterminateFlag: false,
      checkoutIndeterminate: [],
      valuesInit,
      indeterminateCheckAll: false,
      borderCheckbox1: true,
      borderCheckbox2: false,
      borderCheckbox3: false,
      borderCheckbox4: true,
      borderCheckbox5: false,
      borderCheckbox6: false,
      borderSizeCheckbox: ['1'],
      buttonCheckbox: ['剑非道'],
      ButtonMediumCheckbox: ['剑非道'],
      ButtonSmallCheckbox: ['剑非道'],
      ButtonMiniCheckbox: ['剑非道']
    };
  },
  mounted() {
    this.indeterminateFlag = !!this.checkoutIndeterminate.length;
  },
  methods: {
    handleChangeBase(val) {
      console.log(val)
    },
    handleChangeBase2(val) {
      console.log(val)
    },
    handleChangeValues(val) {
      console.log(val)
    },
    handlerCheckAll(val) {
      this.checkoutIndeterminate = val ? valuesInit : [];
      this.indeterminateFlag = false;
    },
    handleIndeterminate(val) {
      const length = val.length;
      console.log(val)
      this.indeterminateCheckAll = length === this.valuesInit.length;
      this.indeterminateFlag = length > 0 && length < this.valuesInit.length;
    }
  }
}
</script>

<style lang="scss" scoped>
.checkout-page {
  margin: 20px 0 100px;
  > p {
    margin: 10px auto;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  > div {
    width: 50%;
    margin: 20px auto;
    text-align: center;
    .indeterminate-checkbox {
      margin-bottom: 20px;
    }
    > label {
      margin: 10px 30px 10px 0;
    }
  }
}
</style>
