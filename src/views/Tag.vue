<template>
  <div class="tag-page">
    <p>基本用法</p>
    <div>
      <DrTag>素还真</DrTag>
      <DrTag type="primary">叶小钗</DrTag>
      <DrTag type="info">一页书</DrTag>
      <DrTag type="success">玉逍遥</DrTag>
      <DrTag type="warning">君奉天</DrTag>
      <DrTag type="error">倦收天</DrTag>
      <DrTag type="success">原无乡</DrTag>
    </div>
    <p>可移除标签</p>
    <div>
      <DrTag closable>素还真</DrTag>
      <DrTag closable type="primary">叶小钗</DrTag>
      <DrTag closable type="info">一页书</DrTag>
      <DrTag closable type="success">玉逍遥</DrTag>
      <DrTag closable type="warning">君奉天</DrTag>
      <DrTag closable type="error">倦收天</DrTag>
      <DrTag closable type="success">原无乡</DrTag>
      <br>
      <br>
      <p>动态删除</p>
      <DrTag
        v-for="item in tags"
        :key="item"
        type="primary"
        @close="handleClose(item)"
        fade
        closable>
        {{item}}
      </DrTag>
      <DrButton @click="tags.push('标签')" size="small">增加标签</DrButton>
    </div>
    <p>不同尺寸</p>
    <div>
      <DrTag closable>素还真</DrTag>
      <DrTag closable size="medium" type="info">一页书</DrTag>
      <DrTag closable size="medium" type="primary">叶小钗</DrTag>
      <DrTag closable size="small" type="success">玉逍遥</DrTag>
      <DrTag closable size="small" type="warning">君奉天</DrTag>
      <DrTag closable size="mini" type="error">倦收天</DrTag>
      <DrTag closable size="mini" type="success">原无乡</DrTag>
    </div>
    <p>不同主题</p>
    <div>
      <p>Dark</p>
      <DrTag theme="dark" type="info">一页书</DrTag>
      <DrTag theme="dark" type="primary">叶小钗</DrTag>
      <DrTag theme="dark" type="success">玉逍遥</DrTag>
      <DrTag closable theme="dark" type="warning">君奉天</DrTag>
      <DrTag closable theme="dark" type="error">倦收天</DrTag>
      <DrTag closable theme="dark" type="success">原无乡</DrTag>
      <p>hollow</p>
      <DrTag theme="hollow" type="info">一页书</DrTag>
      <DrTag theme="hollow" type="primary">叶小钗</DrTag>
      <DrTag theme="hollow" type="success">玉逍遥</DrTag>
      <DrTag closable theme="hollow" type="warning">君奉天</DrTag>
      <DrTag closable theme="hollow" type="error">倦收天</DrTag>
      <DrTag closable theme="hollow" type="success">原无乡</DrTag>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ['标签一', '标签二', '标签三']
    }
  },
  methods: {
    handleClose(item) {
      const index = this.tags.indexOf(item);
      this.tags.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
  .tag-page {
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
      > p {
        margin: 20px 0;
      }
      > div {
        margin-right: 20px;
      }
    }
  }
</style>
