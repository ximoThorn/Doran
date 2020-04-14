<template>
  <div class="pagination-page">
    <p>基本用法</p>
    <div>
      <dr-pagination
        :total="100"
        @prevClick="prevClick"
        @nextClick="nextClick"
        :pageSize.sync="pageSize1"
        :layout="['total', 'pager', 'sizes']"
        :currentPage.sync="currentPage1">
      </dr-pagination>
    </div>
    <p>完整功能用法</p>
    <div>
      <dr-pagination
        :total="200"
        @prevClick="prevClick"
        @nextClick="nextClick"
        :pageSize.sync="pageSize2"
        :pageSizes="[10, 30, 50]"
        :layout="['total', 'pager', 'sizes', 'jumper']"
        :currentPage.sync="currentPage2">
      </dr-pagination>
    </div>
    <p>自定义翻页文字</p>
    <div>
      <dr-pagination
        :total="100"
        prevText="prev"
        nextText="next"
        :layout="['total', 'pager', 'sizes', 'jumper']"
        :pageSize.sync="pageSize3"
        :currentPage.sync="currentPage3">
      </dr-pagination>
    </div>
    <p>小型分页</p>
    <div>
      <dr-pagination
        :total="100"
        :small="true"
        :layout="['total', 'pager', 'sizes', 'jumper']"
        :pageSize.sync="pageSize4"
        :currentPage.sync="currentPage4">
      </dr-pagination>
    </div>
    <p>简约型分页</p>
    <div>
      <dr-pagination
        :total="100"
        :layout="['simplePager']"
        :pageSize.sync="pageSize5"
        :currentPage.sync="currentPage5">
      </dr-pagination>
    </div>
    <p>设置不可用</p>
    <div>
      <dr-pagination
        :layout="['total', 'pager', 'sizes', 'jumper']"
        :disabled="true"
        :total="100">
      </dr-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage1: 1,
      pageSize1: 10,
      currentPage2: 1,
      pageSize2: 10,
      currentPage3: 1,
      pageSize3: 10,
      currentPage4: 1,
      pageSize4: 10,
      currentPage5: 1,
      pageSize5: 10
    }
  },
  methods: {
    prevClick(val) {
      console.log(val);
    },
    nextClick(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss" scoped>
  .pagination-page {
    margin: 20px auto 100px;
    > p {
      margin: 0 auto;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    > div {
      width: 800px;
      margin: 20px auto;
      text-align: center;
    }
  }
</style>
