<template>
  <div class="card-page">
    <p>基本用法</p>
    <div>
      <dr-card header="卡片title">
        <div class="for-item" v-for="item in list" :key="item">
          {{item}}
        </div>
      </dr-card>
    </div>
    <p>自定义header</p>
    <div>
      <dr-card header="卡片title">
        <div slot="header">
          不动城不动城不动城不动城不动城
        </div>
        <div class="for-item" v-for="item in list" :key="item">
          {{item}}
        </div>
      </dr-card>
    </div>
    <p>hover</p>
    <div>
      <dr-card shadow="hover" header="卡片title">
        <div slot="header">
          不动城不动城不动城不动城不动城
        </div>
        <div class="for-item" v-for="item in list" :key="item">
          {{item}}
        </div>
      </dr-card>
    </div>
    <p>自定义body样式</p>
    <div>
      <dr-card :body-style="{padding: '0px'}">
        <img style="width: 100%" src="http://www.pilicn.com/wp-content/themes/pili/lib/timthumb.php?w=362&h=300&q=90&src=http://www.pilicn.com/wp-content/uploads/2018/07/%E9%AD%94%E5%90%9E%E4%B8%8D%E5%8A%A8%E5%9F%8E-1-e1533116642456.jpg" alt="">
        <div style="padding: 14px">
          <span>不动城</span>
        </div>
      </dr-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        '麒麟星',
        '苍鹰',
        '天虎令',
        '炽风翼'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-page {
    margin: 20px 0 100px;
    > p {
      margin: 0 auto;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    > div {
      width: 600px;
      margin: 20px auto;
      .for-item {
        height: 28px;
        line-height: 28px;
      }
    }
  }
</style>
