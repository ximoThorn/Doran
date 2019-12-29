<template>
  <div class="rate-page">
    <p>基本用法</p>
    <div>
      <dr-rate v-model="rate0"></dr-rate>
      <dr-rate v-model="rate1"></dr-rate>
    </div>
    <p>自定义文字提示信息</p>
    <div>
      <dr-rate v-model="rate2"><span>差劲</span></dr-rate>
      <dr-rate v-model="rate3">满意</dr-rate>
    </div>
    <p>允许出现半星</p>
    <div>
      <dr-rate v-model="rate4" allowHalf></dr-rate>
      <dr-rate v-model="rate5" allowHalf></dr-rate>
    </div>
    <p>自定义icon</p>
    <div>
      <dr-rate v-model="rate6" icon="dr-icon-likefill"></dr-rate>
    </div>
    <p>设置只读</p>
    <div>
      <dr-rate v-model="rate7" disabled></dr-rate>
    </div>
    <p>自定义颜色</p>
    <div>
      <dr-rate v-model="rate8" unColor="#333333" activeColor="#ed4014"></dr-rate>
    </div>
    <p>设置分段颜色</p>
    <div>
      <dr-rate v-model="rate9" :colors="rateColors1"></dr-rate>
      <dr-rate v-model="rate10" :colors="rateColors2" allowHalf></dr-rate>
    </div>
  </div>
</template>

<script>
const rateColors1 = [
  {
    color: '#99A9BF',
    rate: 2
  },
  {
    color: '#F7BA2A',
    rate: 4
  },
  {
    color: '#FF9900',
    rate: 5
  }
];
const rateColors2 = [
  {
    color: '#99A9BF',
    rate: 2
  },
  {
    color: '#19be6b',
    rate: 4
  },
  {
    color: '#ed4014',
    rate: 5
  }
];
export default {
  data() {
    return {
      rate0: 0,
      rate1: 3,
      rate2: 0,
      rate3: 5,
      rate4: 3.2,
      rate5: 3.8,
      rate6: 4,
      rate7: 4,
      rate8: 3,
      rate9: 3,
      rate10: 2.8,
      rateColors1,
      rateColors2
    };
  }
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
      width: 500px;
      margin: 20px auto;
      text-align: center;
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
