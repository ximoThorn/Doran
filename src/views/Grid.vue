<template>
  <div class="grid-page">
    <p>基础布局</p>
    <div>
      <dr-row>
        <dr-col :span="24">
          <div class="col-demo">col-24</div>
        </dr-col>
      </dr-row>
      <dr-row>
        <dr-col :span="12">
          <div class="col-demo">col-12</div>
        </dr-col>
        <dr-col :span="12">
          <div class="col-demo">col-12</div>
        </dr-col>
      </dr-row>
      <dr-row>
        <dr-col :span="8">
          <div class="col-demo">col-8</div>
        </dr-col>
        <dr-col :span="8">
          <div class="col-demo">col-8</div>
        </dr-col>
        <dr-col :span="8">
          <div class="col-demo">col-8</div>
        </dr-col>
      </dr-row>
      <dr-row>
        <dr-col :span="6">
          <div class="col-demo">col-6</div>
        </dr-col>
        <dr-col :span="6">
          <div class="col-demo">col-6</div>
        </dr-col>
        <dr-col :span="6">
          <div class="col-demo">col-6</div>
        </dr-col>
        <dr-col :span="6">
          <div class="col-demo">col-6</div>
        </dr-col>
      </dr-row>
      <dr-row>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
      </dr-row>
    </div>
    <p>设置间距</p>
    <div>
      <dr-row :gutter="10">
        <dr-col :span="12">
          <div class="col-demo">col-12</div>
        </dr-col>
        <dr-col :span="12">
          <div class="col-demo">col-12</div>
        </dr-col>
      </dr-row>
      <dr-row :gutter="20">
        <dr-col :span="8">
          <div class="col-demo">col-8</div>
        </dr-col>
        <dr-col :span="8">
          <div class="col-demo">col-8</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
      </dr-row>
      <dr-row :gutter="20">
        <dr-col :span="16">
          <div class="col-demo">col-16</div>
        </dr-col>
        <dr-col :span="8">
          <div class="col-demo">col-8</div>
        </dr-col>
      </dr-row>
      <dr-row :gutter="30">
        <dr-col :span="6">
          <div class="col-demo">col-6</div>
        </dr-col>
        <dr-col :span="6">
          <div class="col-demo">col-6</div>
        </dr-col>
        <dr-col :span="6">
          <div class="col-demo">col-6</div>
        </dr-col>
        <dr-col :span="6">
          <div class="col-demo">col-6</div>
        </dr-col>
      </dr-row>
    </div>
    <p>设置位移</p>
    <div>
      <p>偏移</p>
      <dr-row>
        <dr-col :span="12" offset="6">
          <div class="col-demo">col-12</div>
        </dr-col>
      </dr-row>
      <dr-row>
        <dr-col :span="6" offset="6">
          <div class="col-demo">col-6</div>
        </dr-col>
        <dr-col :span="6" offset="6">
          <div class="col-demo">col-6</div>
        </dr-col>
      </dr-row>
      <dr-row>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4" offset="6">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4" offset="6">
          <div class="col-demo">col-4</div>
        </dr-col>
      </dr-row>
      <dr-row>
        <dr-col :span="6">
          <div class="col-demo">col-6</div>
        </dr-col>
        <dr-col :span="3" offset="3">
          <div class="col-demo">col-3</div>
        </dr-col>
        <dr-col :span="3" offset="3">
          <div class="col-demo">col-3</div>
        </dr-col>
        <dr-col :span="3" offset="3">
          <div class="col-demo">col-3</div>
        </dr-col>
      </dr-row>
      <p>平移</p>
      <dr-row>
        <dr-col :span="6" push="4">
          <div class="col-demo">col-6</div>
        </dr-col>
        <dr-col :span="3" push="6">
          <div class="col-demo">col-3</div>
        </dr-col>
      </dr-row>
      <dr-row>
        <dr-col :span="4" offset="4" pull="2">
          <div class="col-demo">col-6</div>
        </dr-col>
        <dr-col :span="4" offset="4" pull="2">
          <div class="col-demo">col-3</div>
        </dr-col>
      </dr-row>
    </div>
    <p>设置flex布局方式</p>
    <div>
      <p>排序</p>
      <dr-row type="flex">
        <dr-col :span="4" order="3">
          <div class="col-demo">1 | order-3</div>
        </dr-col>
        <dr-col :span="4" order="4">
          <div class="col-demo">2 | order-4</div>
        </dr-col>
        <dr-col :span="4" order="5">
          <div class="col-demo">3 | order-5</div>
        </dr-col>
        <dr-col :span="4" order="2">
          <div class="col-demo">4 | order-2</div>
        </dr-col>
        <dr-col :span="4" order="1">
          <div class="col-demo">5 | order-1</div>
        </dr-col>
        <dr-col :span="4" order="6">
          <div class="col-demo">6 | order-6</div>
        </dr-col>
      </dr-row>
      <dr-row type="flex">
        <dr-col :span="4" offset="4" order="3">
          <div class="col-demo">1 | order-3</div>
        </dr-col>
        <dr-col :span="4" order="5">
          <div class="col-demo">2 | order-5</div>
        </dr-col>
        <dr-col :span="4" offset="8" order="6">
          <div class="col-demo">3 | order-6</div>
        </dr-col>
      </dr-row>
      <p>对齐方式(start/center/end/space-around/space-between)</p>
      <dr-row type="flex" justify="start">
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
      </dr-row>
      <dr-row type="flex" justify="center">
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
      </dr-row>
      <dr-row type="flex" justify="end">
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
      </dr-row>
      <dr-row type="flex" justify="space-around">
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
      </dr-row>
      <dr-row type="flex" justify="space-between">
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
      </dr-row>
      <p>垂直对齐方式(top/middle/bottom)</p>
      <dr-row class="row-align" justify="center" type="flex" align="top">
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
      </dr-row>
      <dr-row class="row-align" justify="center" type="flex" align="middle">
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
      </dr-row>
      <dr-row class="row-align" justify="center" type="flex" align="bottom">
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
        <dr-col :span="4">
          <div class="col-demo">col-4</div>
        </dr-col>
      </dr-row>
    </div>
    <p>响应式布局(五个响应尺寸:xs(小于768)、sm(≥768)、md(≥1024)、lg(≥1200)、xl(≥1920))</p>
    <div>
      <dr-row :gutter="10">
        <dr-col :xs="8" :sm="6" :md="4" :lg="3" :xl="2"><div class="col-demo">col</div></dr-col>
        <dr-col :xs="4" :sm="6" :md="8" :lg="9" :xl="10"><div class="col-demo">col</div></dr-col>
        <dr-col :xs="4" :sm="6" :md="8" :lg="9" :xl="10"><div class="col-demo">col</div></dr-col>
        <dr-col :xs="8" :sm="6" :md="4" :lg="3" :xl="2"><div class="col-demo">col</div></dr-col>
      </dr-row>
      <dr-row>
        <dr-col :xs="8" :sm="6" :md="4" :lg="{span: 4, offset: 1}" :xl="{span: 2, offset: 2}"><div class="col-demo">col</div></dr-col>
        <dr-col :xs="8" :sm="6" :md="4" :lg="{span: 2, offset: 2}" :xl="{span: 2, offset: 2}"><div class="col-demo">col</div></dr-col>
        <dr-col :xs="4" :sm="6" :md="8" :lg="{span: 8, offset: 2}" :xl="{span: 6, offset: 2}"><div class="col-demo">col</div></dr-col>
        <dr-col :xs="4" :sm="6" :md="8" :lg="{span: 4, offset: 1}" :xl="{span: 6, offset: 2}"><div class="col-demo">col</div></dr-col>
      </dr-row>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.grid-page {
    padding-bottom: 100PX;
    > p {
      margin-bottom: 20px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    > div {
      margin: 0 auto 30px;
      width: 600px;
      overflow: hidden;
      > p {
        margin-bottom: 20px;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
      }
      .dr-row-default {
        margin-bottom: 20px;
        background-color: rgba(0, 0, 0, .3);
        .dr-col-default {
          .col-demo {
            height: 40px;
            line-height: 40px;
            text-align: center;
            color: #ffffff;
            font-size: 14px;
          }
          &:nth-child(odd) {
            .col-demo {
              background-color: rgba(0,153,229,.9);
            }
          }
          &:nth-child(even) {
            .col-demo {
              background-color: rgba(0,153,229,.7);
            }
          }
        }
      }
      .row-align {
        .dr-col-default {
          &:nth-child(odd) {
            .col-demo {
              height: 80px;
            }
          }
          &:nth-child(even) {
            .col-demo {
              height: 40px;
            }
          }
        }
      }
    }
  }
</style>
