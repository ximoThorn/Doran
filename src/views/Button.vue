<template>
  <div class="button-page">
    <div>
      <p>默认按钮</p>
      <DrButton>
        默认按钮
      </DrButton>
      <DrButton
        type="dashed">
        dashed按钮
      </DrButton>
      <DrButton
        type="text">
        文字按钮
      </DrButton>
    </div>
    <div>
      <p>状态按钮</p>
      <DrButton
        type="primary">
        主要按钮
      </DrButton>
      <DrButton
        type="info">
        信息按钮
      </DrButton>
      <DrButton
        type="success">
        成功按钮
      </DrButton>
      <DrButton
        type="warning">
        警告按钮
      </DrButton>
      <DrButton
        type="error">
        错误按钮
      </DrButton>
    </div>
    <div>
      <p>失效按钮</p>
      <DrButton
        type="primary"
        disabled>
        主要按钮
      </DrButton>
      <DrButton
        type="info"
        disabled>
        信息按钮
      </DrButton>
      <DrButton
        type="success"
        disabled>
        成功按钮
      </DrButton>
      <DrButton
        type="warning"
        disabled>
        警告按钮
      </DrButton>
      <DrButton
        type="error"
        disabled>
        错误按钮
      </DrButton>
    </div>
    <div>
      <p>镂空效果</p>
      <DrButton
        type="primary"
        hollow>
        主要按钮
      </DrButton>
      <DrButton
        type="info"
        hollow>
        信息按钮
      </DrButton>
      <DrButton
        type="success"
        hollow>
        成功按钮
      </DrButton>
      <DrButton
        type="warning"
        hollow>
        警告按钮
      </DrButton>
      <DrButton
        type="error"
        hollow>
        错误按钮
      </DrButton>
    </div>
    <div>
      <p>不同尺寸</p>
      <DrButton
        type="primary">
        默认大小
      </DrButton>
      <DrButton
        type="info"
        size="medium">
        中型按钮
      </DrButton>
      <DrButton
        type="success"
        size="small">
        小型按钮
      </DrButton>
      <DrButton
        type="warning"
        size="mini">
        超小按钮
      </DrButton>
    </div>
    <div>
      <p>圆角按钮</p>
      <DrButton
        type="primary"
        round>
        默认大小
      </DrButton>
      <DrButton
        type="info"
        size="medium"
        round>
        中型按钮
      </DrButton>
      <DrButton
        type="success"
        size="small"
        round>
        小型按钮
      </DrButton>
      <DrButton
        type="warning"
        size="mini"
        round>
        超小按钮
      </DrButton>
    </div>
    <div>
      <p>圆形按钮</p>
      <DrButton
        type="primary"
        icon="dr-icon-search"
        circle>
      </DrButton>
      <DrButton
        type="primary"
        icon="dr-icon-home"
        circle>
      </DrButton>
      <DrButton
        type="primary"
        icon="dr-icon-favor"
        circle>
      </DrButton>
      <DrButton
        type="primary"
        icon="dr-icon-edit"
        circle>
      </DrButton>
      <DrButton
        type="primary"
        icon="dr-icon-tagfill"
        circle>
      </DrButton>
    </div>
    <div>
      <p>loading按钮</p>
      <DrButton
        type="primary" loading>
        加载中...
      </DrButton>
      <DrButton
        type="primary"
        @click="handleClick"
        icon="dr-icon-appreciate"
        :loading="loadflag">
        <span v-if="!loadflag">click me</span>
        <span v-else>loading...</span>
      </DrButton>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadflag: false
    };
  },
  methods: {
    handleClick() {
      this.loadflag = true;
      setTimeout(() => {
        this.loadflag = false;
      }, 3000);
    }
  }
}
</script>

<style lang="scss">
.button-page {
  div {
    margin-bottom: 20px;
    p {
      margin: 10px 0;
    }
    button {
      margin: 0 15px;
    }
  }
}
</style>
