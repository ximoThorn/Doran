<template>
  <div class="tooltip-page">
    <br>
    <p>基本用法</p>
    <div>
      <div class="top">
        <dr-tooltip content="tooltip 我在上左" placement="top-start">
          <dr-button>上左</dr-button>
        </dr-tooltip>
        <dr-tooltip content="tooltip 我在上中" placement="top">
          <dr-button>上中</dr-button>
        </dr-tooltip>
        <dr-tooltip content="tooltip 我在上右" placement="top-end">
          <dr-button>上右</dr-button>
        </dr-tooltip>
      </div>
      <div class="middle">
        <div class="left">
          <dr-tooltip content="tooltip 我在左上" placement="left-start">
            <dr-button>左上</dr-button>
          </dr-tooltip>
          <dr-tooltip content="tooltip 我在左中" placement="left">
            <dr-button>左中</dr-button>
          </dr-tooltip>
          <dr-tooltip content="tooltip 我在左下" placement="left-end">
            <dr-button>左下</dr-button>
          </dr-tooltip>
        </div>
        <div class="right">
          <dr-tooltip content="tooltip 我在右上" placement="right-start">
            <dr-button>右上</dr-button>
          </dr-tooltip>
          <dr-tooltip content="tooltip 我在右中" placement="right">
            <dr-button>右中</dr-button>
          </dr-tooltip>
          <dr-tooltip content="tooltip 我在右下" placement="right-end">
            <dr-button>右下</dr-button>
          </dr-tooltip>
        </div>
      </div>
      <div class="bottom">
        <dr-tooltip content="tooltip 我在下左" placement="bottom-start">
          <dr-button>下左</dr-button>
        </dr-tooltip>
        <dr-tooltip content="tooltip 我在下中" placement="bottom">
          <dr-button>下中</dr-button>
        </dr-tooltip>
        <dr-tooltip content="tooltip 我在下右" placement="bottom-end">
          <dr-button>下右</dr-button>
        </dr-tooltip>
      </div>
    </div>
    <p>自定义内容</p>
    <div>
      <dr-tooltip placement="bottom-start">
        <div slot="content">
          我是第一行信息<br><br>
          我是第二行信息
        </div>
        <dr-button>自定义换行</dr-button>
      </dr-tooltip>
    </div>
    <p>禁用</p>
    <div>
      <dr-tooltip content="我是可以关闭的tooltip" :disabled="disabled" placement="bottom">
        <dr-button @click="disabled = !disabled">点击{{!disabled ? '关闭' : '打开'}}提示</dr-button>
      </dr-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false
    }
  }
}
</script>

<style lang="scss" scoped>
.tooltip-page {
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
    text-align: center;
    .top {
      width: 100%;
      > div {
        margin-right: 20px;
      }
    }
    .bottom {
      width: 100%;
      > div {
        margin-right: 20px;
      }
    }
    .middle {
      height: 170px;
      overflow: hidden;
      .left {
        width: 80px;
        height: 200px;
        float: left;
        > div {
          margin-bottom: 20px;
        }
    }
    .right {
        width: 80px;
        height: 200px;
        float: right;
        > div {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
