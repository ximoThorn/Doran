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
        size="medium"
        circle>
      </DrButton>
      <DrButton
        type="primary"
        icon="dr-icon-edit"
        size="small"
        circle>
      </DrButton>
      <DrButton
        type="primary"
        icon="dr-icon-tagfill"
        size="mini"
        circle>
      </DrButton>
    </div>
    <div>
      <p>图标按钮</p>
      <DrButton
        type="primary" loading>
        加载中...
      </DrButton>
      <DrButton
        type="primary">
        点赞 <DrIcon icon="dr-icon-appreciate" />
      </DrButton>
      <DrButton
        type="primary"
        @click="handleClick"
        icon="dr-icon-appreciate"
        :loading="loadflag">
        <span v-if="!loadflag"> click me</span>
        <span v-else> loading...</span>
      </DrButton>
    </div>
    <div>
      <p>按钮组</p>
      <DrButtonGroup>
        <DrButton>
          默认按钮
        </DrButton>
        <DrButton>
          home
        </DrButton>
        <DrButton>
          默认按钮
        </DrButton>
        <DrButton type="dashed">
          默认按钮
        </DrButton>
      </DrButtonGroup>
      <br>
      <br>
      <DrButtonGroup size="mini">
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
      </DrButtonGroup>
      <br>
      <br>
      <DrButtonGroup>
        <DrButton
          icon="dr-icon-search"
          circle>
        </DrButton>
        <DrButton
          icon="dr-icon-home"
          circle>
        </DrButton>
        <DrButton
          icon="dr-icon-edit"
          circle>
        </DrButton>
        <DrButton
          icon="dr-icon-favor"
          circle>
        </DrButton>
      </DrButtonGroup>
      <br>
      <br>
      <DrButtonGroup>
        <DrButton
          type="primary"
          size="small"
          icon="dr-icon-search">
        </DrButton>
        <DrButton
          type="success"
          size="small"
          icon="dr-icon-home">
        </DrButton>
        <DrButton
          type="warning"
          size="small"
          icon="dr-icon-edit">
        </DrButton>
        <DrButton
          type="error"
          size="small"
          icon="dr-icon-favor">
        </DrButton>
      </DrButtonGroup>
      <br>
      <br>
      <DrButtonGroup class="page-button-group" vertical>
        <DrButton
          type="primary"
          size="small"
          icon="dr-icon-search">
        </DrButton>
        <DrButton
          type="success"
          size="small"
          icon="dr-icon-home">
        </DrButton>
        <DrButton
          type="warning"
          size="small"
          icon="dr-icon-edit">
        </DrButton>
        <DrButton
          type="error"
          size="small"
          icon="dr-icon-favor">
        </DrButton>
      </DrButtonGroup>
      <DrButtonGroup class="page-button-group" vertical>
        <DrButton
          size="small"
          icon="dr-icon-search">
        </DrButton>
        <DrButton
          size="small"
          icon="dr-icon-home">
        </DrButton>
        <DrButton
          size="small"
          icon="dr-icon-edit">
        </DrButton>
        <DrButton
          size="small"
          icon="dr-icon-favor">
        </DrButton>
      </DrButtonGroup>
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
  padding-bottom: 100px;
  > div {
    overflow: hidden;
    margin-bottom: 20px;
    text-align: center;
    p {
      margin: 10px 0;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    > button {
      margin: 0 15px;
    }
    .page-button-group {
      display: inline-block;
      margin: 0 20px;
    }
  }
}
</style>
