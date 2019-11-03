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
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
