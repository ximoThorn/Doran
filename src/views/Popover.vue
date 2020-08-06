<template>
  <div class="popover-page">
    <br>
    <p>基本用法</p>
    <div>
      <div class="top">
        <dr-popover placement="top-start">
          <dr-button>上左</dr-button>
        </dr-popover>
        <dr-popover placement="top">
          <dr-button>上中</dr-button>
        </dr-popover>
        <dr-popover placement="top-end">
          <dr-button>上右</dr-button>
        </dr-popover>
      </div>
      <div class="middle">
        <div class="left">
          <dr-popover placement="left-start">
            <dr-button>左上</dr-button>
          </dr-popover>
          <dr-popover placement="left">
            <dr-button>左中</dr-button>
          </dr-popover>
          <dr-popover placement="left-end">
            <dr-button>左下</dr-button>
          </dr-popover>
        </div>
        <div class="right">
          <dr-popover placement="right-start">
            <dr-button>右上</dr-button>
          </dr-popover>
          <dr-popover placement="right">
            <dr-button>右中</dr-button>
          </dr-popover>
          <dr-popover placement="right-end">
            <dr-button>右下</dr-button>
          </dr-popover>
        </div>
      </div>
      <div class="bottom">
        <dr-popover placement="bottom-start">
          <dr-button>下左</dr-button>
        </dr-popover>
        <dr-popover placement="bottom">
          <dr-button>下中</dr-button>
        </dr-popover>
        <dr-popover placement="bottom-end">
          <dr-button>下右</dr-button>
        </dr-popover>
      </div>
    </div>
    <p>触发方式</p>
    <div class="method">
      <dr-popover placement="top">
        <dr-button>hover</dr-button>
      </dr-popover>
      <dr-popover trigger="click" placement="bottom">
        <dr-button>click</dr-button>
      </dr-popover>
      <dr-popover trigger="focus" placement="top">
        <dr-button>focus</dr-button>
      </dr-popover>
      <dr-popover :visible="visible" trigger="custom" placement="bottom">
        <dr-button @click="handlerCustom">自定义</dr-button>
        <div slot="content">
          <h5>我是title</h5>
          <p style="marginTop: 10px">我是内容</p>
          <dr-button size="mini" style="margin-left: 60px" type="primary" @click="handlerCancel">取消</dr-button>
        </div>
      </dr-popover>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    handlerCustom() {
      this.visible = true;
    },
    handlerCancel() {
      this.visible = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.popover-page {
  margin: 60px 0 100px;
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
  .method {
    > div {
      margin-right: 20px;
    }
  }
}
</style>
