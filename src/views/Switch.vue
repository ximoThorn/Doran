<template>
  <div class="switch-page">
    <p>基本用法</p>
    <div>
      <DrSwitch v-model="defaultSwitch" @change="handlerChange"></DrSwitch>
    </div>
    <p>失效状态</p>
    <div>
      <DrSwitch disabled v-model="defaultSwitch" @change="handlerChange"></DrSwitch>
    </div>
    <p>拓展value值</p>
    <div>
      <DrSwitch
        v-model="labelSwitch"
        trueLabel="100"
        falseLabel="200"
        @change="handlerLabelChange">
      </DrSwitch>
      <span style="margin-left: 20px;">{{labelSwitch}}</span>
    </div>
    <p>不同的颜色</p>
    <div>
      <DrSwitch class="marginSwitch" trueColor="#2d8cf0" falseColor="#515a6e" v-model="colorSwitch1"></DrSwitch>
      <DrSwitch trueColor="#2db7f5" falseColor="#ff9900" v-model="colorSwitch2"></DrSwitch>
    </div>
    <p>加载状态</p>
    <div>
      <DrSwitch class="marginSwitch" v-model="loadSwitch" loading></DrSwitch>
      <DrSwitch v-model="loadSwitch2" disabled loading></DrSwitch>
    </div>
    <p>文字和图标</p>
    <div>
      <DrSwitch class="marginSwitch" v-model="textSwitch">
        <span slot="open">开</span>
        <span slot="close">关</span>
      </DrSwitch>
      <DrSwitch v-model="iconSwitch">
        <DrIcon size="13" color="#fff" slot="open" icon="dr-icon-check"></DrIcon>
        <DrIcon size="13" color="#fff" slot="close" icon="dr-icon-close"></DrIcon>
      </DrSwitch>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultSwitch: false,
      labelSwitch: '200',
      colorSwitch1: false,
      colorSwitch2: false,
      loadSwitch: false,
      loadSwitch2: true,
      textSwitch: false,
      iconSwitch: false
    };
  },
  methods: {
    handlerChange(val) {
      console.log(val, 'switch');
    },
    handlerLabelChange(val) {
      console.log(val);
    }
  }
}
</script>

<style lang="scss" scoped>
  .switch-page {
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
      .marginSwitch {
        margin-right: 20px;
      }
    }
  }
</style>
