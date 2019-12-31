<template>
  <div class="divider-page">
    <p>水平分割线</p>
    <div>
      <p>半神半圣亦半仙，全儒全道是全贤，脑中真书藏万卷，掌握文武半边天。</p>
      <dr-divider></dr-divider>
      <p>真神真圣亦真仙，通儒通道是通贤；脑中玄机用不尽，统辖文武半边天。</p>
      <dr-divider></dr-divider>
      <p>昂首千丘远，啸傲风间；堪寻敌手共论剑，高处不胜寒。</p>
      <dr-divider dashed></dr-divider>
      <p>江天一色无纤尘，鱼龙潜跃观道身。天人焉有两般义？道不虚行只在人。</p>
    </div>
    <p>设置文案</p>
    <div>
      <dr-divider>素还真</dr-divider>
      <p>半神半圣亦半仙，全儒全道是全贤，脑中真书藏万卷，掌握文武半边天。</p>
      <dr-divider contentPosition="center">谈无欲</dr-divider>
      <p>真神真圣亦真仙，通儒通道是通贤；脑中玄机用不尽，统辖文武半边天。</p>
      <dr-divider contentPosition="right">风之痕</dr-divider>
      <p>昂首千丘远，啸傲风间；堪寻敌手共论剑，高处不胜寒。</p>
      <dr-divider dashed><dr-icon icon="dr-icon-appreciate"></dr-icon></dr-divider>
      <p>江天一色无纤尘，鱼龙潜跃观道身。天人焉有两般义？道不虚行只在人。</p>
    </div>
    <p>垂直分隔</p>
    <div>
      <span>天迹</span>
      <dr-divider direction="vertical"></dr-divider>
      <span>地冥</span>
      <dr-divider direction="vertical"></dr-divider>
      <span>法儒</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }
}
</script>

<style lang="scss" scoped>
  .divider-page {
    margin: 20px auto 100px;
    > p {
      margin: 0 auto;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    > div {
      width: 500px;
      margin: 20px auto;
      > p {
        margin: 20px 0;
      }
    }
  }
</style>
