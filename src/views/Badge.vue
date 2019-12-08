<template>
  <div class="badge-page">
    <p>基础用法</p>
    <div>
      <DrBadge :count="100">
        <DrButton size="small">评论</DrButton>
      </DrBadge>
      <DrBadge type="info" :count="66">
        <DrButton size="small">回复</DrButton>
      </DrBadge>
      <DrBadge type="success" :count="12">
        <DrButton size="small">点赞</DrButton>
      </DrBadge>
      <DrBadge type="error" :count="6">
        <DrButton size="small">人气</DrButton>
      </DrBadge>
      <DrBadge type="error" :count="6">
        <DrButton
          type="primary"
          size="small"
          icon="dr-icon-home">
        </DrButton>
      </DrBadge>
    </div>
    <p>设置最大值（当超过最大值时显示max+, 在text属性不存在时有效）</p>
    <div>
      <DrBadge :count="1000" :max="99">
        <DrButton size="small">评论</DrButton>
      </DrBadge>
      <DrBadge type="error" :count="66" :max="10">
        <DrButton size="small">回复</DrButton>
      </DrBadge>
    </div>
    <p>自定义微标的背景色和内容</p>
    <div>
      <DrBadge :count="99" color="#800080">
        <DrButton size="small">评论</DrButton>
      </DrBadge>
      <DrBadge :count="66" :max="10" color="#FFC0CB">
        <DrButton size="small">回复</DrButton>
      </DrBadge>
      <DrBadge text="new" type="error">
        <DrButton size="small">评论</DrButton>
      </DrBadge>
      <DrBadge text="hot" type="error">
        <DrButton size="small">回复</DrButton>
      </DrBadge>
    </div>
    <p>设置是否隐藏</p>
    <div>
      <DrBadge :hidden="hiddenFlag" :count="0" color="#800080">
        <DrButton type="primary" @click="hiddenFlag = !hiddenFlag" size="small">点我试试</DrButton>
      </DrBadge>
    </div>
    <p>圆点</p>
    <div>
      <DrBadge dot type="error">
        数据统计
      </DrBadge>
      <DrBadge dot type="error">
        <DrButton
          type="primary"
          size="small"
          icon="dr-icon-sharelight">
        </DrButton>
      </DrBadge>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hiddenFlag: false
    };
  }
}
</script>

<style lang="scss" scoped>
  .badge-page {
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
      > div {
        margin-right: 30px;
      }
    }
  }
</style>
