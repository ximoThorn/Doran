<template>
  <div class="select-page">
    <p>基本用法</p>
    <div>
      <dr-select v-model="value1">
        <dr-option
          v-for="(item, index) in selectOptions"
          :key="index"
          :label="item.label"
          :value="item.value">
        </dr-option>
      </dr-select>
    </div>
    <p>基本选项</p>
    <div>
      <dr-select v-model="value2">
        <dr-option
          v-for="(item, index) in selectOptions"
          :key="index"
          :disabled="item.disabled"
          :label="item.label"
          :value="item.value">
        </dr-option>
      </dr-select>
    </div>
    <p>禁用select</p>
    <div>
      <dr-select v-model="value3" disabled>
        <dr-option
          v-for="(item, index) in selectOptions"
          :key="index"
          :label="item.label"
          :value="item.value">
        </dr-option>
      </dr-select>
    </div>
    <p>可清空单选</p>
    <div>
      <dr-select v-model="value4" clearable>
        <dr-option
          v-for="(item, index) in selectOptions"
          :key="index"
          :label="item.label"
          :value="item.value">
        </dr-option>
      </dr-select>
    </div>
  </div>
</template>

<script>
const selectOptions = [
  {
    label: '素还真',
    value: 'suhuanzhen',
    disabled: false
  },
  {
    label: '一页书',
    value: 'yiyeshu',
    disabled: true
  },
  {
    label: '叶小钗',
    value: 'yexiaochai',
    disabled: false
  },
  {
    label: '玉逍遥',
    value: 'yuxiaoyao',
    disabled: true
  },
  {
    label: '君奉天',
    value: 'junfengtian',
    disabled: false
  }
];

export default {
  data() {
    return {
      selectOptions,
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    };
  }
};
</script>

<style lang="scss" scoped>
  .select-page {
    margin: 20px auto 100px;
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
      .dr-select-default {
        width: 240px;
      }
      .view-select {
        margin-right: 20px;
      }
      > p {
        margin: 20px 0;
      }
    }
  }
</style>
