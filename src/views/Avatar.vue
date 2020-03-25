<template>
  <div class="avatar-page">
    <p>基本用法</p>
    <div>
      <DrAvatar size="large"></DrAvatar>
      <DrAvatar></DrAvatar>
      <DrAvatar size="small"></DrAvatar>
      <DrAvatar size="mini"></DrAvatar>
      <br>
      <br>
      <DrAvatar size="large" shape="circle"></DrAvatar>
      <DrAvatar shape="circle"></DrAvatar>
      <DrAvatar size="small" shape="circle"></DrAvatar>
      <DrAvatar size="mini" shape="circle"></DrAvatar>
    </div>
    <p>基本用法</p>
    <div>
      <DrAvatar :src="avatar" size="large"></DrAvatar>
      <DrAvatar :src="avatar"></DrAvatar>
      <DrAvatar :src="avatar" size="small"></DrAvatar>
      <DrAvatar :src="avatar" size="mini"></DrAvatar>
      <br>
      <br>
      <DrAvatar :src="avatar" size="large" shape="circle"></DrAvatar>
      <DrAvatar :src="avatar" shape="circle"></DrAvatar>
      <DrAvatar :src="avatar" size="small" shape="circle"></DrAvatar>
      <DrAvatar :src="avatar" size="mini" shape="circle"></DrAvatar>
    </div>
    <p>自定义icon和内容</p>
    <div>
      <DrAvatar icon="dr-icon-favor" size="large"></DrAvatar>
      <DrAvatar icon="dr-icon-location"></DrAvatar>
      <DrAvatar icon="dr-icon-likefill" size="small"></DrAvatar>
      <DrAvatar icon="dr-icon-scan" size="mini"></DrAvatar>
      <br>
      <br>
      <DrAvatar>u</DrAvatar>
      <DrAvatar>u</DrAvatar>
      <DrAvatar shape="circle">u</DrAvatar>
      <DrAvatar shape="circle">u</DrAvatar>
    </div>
    <p>自定义颜色和背景色</p>
    <div>
      <DrAvatar color="#ed4014" bgColor="#2d8cf0"></DrAvatar>
      <DrAvatar color="#ed4014" bgColor="#2db7f5"></DrAvatar>
      <DrAvatar color="#ed4014" bgColor="#19be6b" shape="circle"></DrAvatar>
      <DrAvatar color="#ed4014" bgColor="#ff9900" shape="circle"></DrAvatar>
    </div>
    <p>带微标</p>
    <div>
      <DrBadge :count="1">
        <DrAvatar></DrAvatar>
      </DrBadge>
      <DrBadge dot>
        <DrAvatar></DrAvatar>
      </DrBadge>
    </div>
  </div>
</template>

<script>
import avatar from '../../assets/images/avatar.jpg';
export default {
  data() {
    return {
      avatar
    };
  }
}
</script>

<style lang="scss" scoped>
  .avatar-page {
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
      > span {
        margin-right: 30px;
      }
      > div {
        margin-right: 30px;
      }
    }
  }
</style>
