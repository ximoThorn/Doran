<template>
  <div class="select-page">
    <p>基本用法</p>
    <div>
      <dr-select @visibleChange="handlerVisibleChange" v-model="value1">
        <dr-option
          v-for="(item, index) in selectOptions"
          :key="index"
          :label="item.label"
          :value="item.value">
        </dr-option>
      </dr-select>
    </div>
    <p>基本选项禁用</p>
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
      <dr-select v-model="value3" @change="handlerChange" clearable>
        <dr-option
          v-for="(item, index) in selectOptions"
          :key="index"
          :label="item.label"
          :value="item.value">
        </dr-option>
      </dr-select>
    </div>
    <p>基础多选</p>
    <div>
      <dr-select v-model="value4" @change="handlerChange" multiple>
        <dr-option
          v-for="(item, index) in selectOptions"
          :key="index"
          :label="item.label"
          :value="item.value">
        </dr-option>
      </dr-select>
    </div>
    <p>自定义模板</p>
    <div>
      <dr-select v-model="value5">
        <dr-option
          v-for="(item, index) in selectOptions"
          :key="index"
          :label="item.label"
          :value="item.value">
          <span style="float: left">{{item.label}}</span>
          <span style="float: right">{{item.value}}</span>
        </dr-option>
      </dr-select>
    </div>
    <p>选项分组</p>
    <div>
      <dr-select v-model="value6">
        <dr-option-group
          v-for="(item, index) in selectOptionsGroup"
          :key="index"
          :label="item.label">
          <dr-option
            v-for="child in item.options"
            :key="child.value"
            :value="child.value"
            :label="child.label">
          </dr-option>
        </dr-option-group>
      </dr-select>
    </div>
    <p>可搜索</p>
    <div>
      <dr-select v-model="value7" filterable>
        <dr-option
          v-for="(item, index) in filterOptions"
          :key="index"
          :label="item.label"
          :value="item.value">
        </dr-option>
      </dr-select>
    </div>
    <p>远程搜索</p>
    <div>
      <dr-select
        v-model="value8"
        filterable
        remote
        :remote-method="remoteMethod"
        :loading="loading">
        <dr-option
          v-for="(item, index) in remoteOptions"
          :key="index"
          :label="item.label"
          :value="item.value">
        </dr-option>
      </dr-select>
    </div>
    <p class="remark">注：暂时没有搜索多选的功能</p>
    <br>
    <br>
    <p>不同尺寸</p>
    <div>
      <dr-select v-model="value9">
        <dr-option
          v-for="(item, index) in selectOptions"
          :key="index"
          :label="item.label"
          :value="item.value">
        </dr-option>
      </dr-select>
      <br>
      <br>
      <dr-select size="medium" v-model="value10">
        <dr-option
          v-for="(item, index) in selectOptions"
          :key="index"
          :label="item.label"
          :value="item.value">
        </dr-option>
      </dr-select>
      <br>
      <br>
      <dr-select size="small" v-model="value11">
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
  },
  {
    label: '素续缘',
    value: 'suxuyuan',
    disabled: false
  }
];

const selectOptionsGroup = [
  {
    label: '热度角色',
    options: [
      {
        value: 'suhuanzhen',
        label: '素还真'
      },
      {
        label: '一页书',
        value: 'yiyeshu'
      },
      {
        label: '叶小钗',
        value: 'yexiaochai'
      }
    ]
  },
  {
    label: '角色名',
    options: [
      {
        value: 'juanshoutian',
        label: '倦收天'
      },
      {
        value: 'yuanwuxiang',
        label: '原无乡'
      },
      {
        value: 'fengzhihen',
        label: '风之痕'
      },
      {
        value: 'kuangdao',
        label: '狂刀'
      },
      {
        value: 'yuxiaoyao',
        label: '玉逍遥'
      },
      {
        value: 'junfengtian',
        label: '君奉天'
      },
      {
        value: 'diming',
        label: '地冥'
      },
      {
        value: 'jianfeidao',
        label: '剑非道'
      }
    ]
  }
];

export default {
  data() {
    return {
      selectOptions,
      selectOptionsGroup,
      value1: '',
      value2: '',
      value3: '',
      value4: [],
      value5: '',
      value6: '',
      value7: '',
      filterOptions: selectOptions,
      loading: false,
      value8: '',
      remoteOptions: [],
      value9: '',
      value10: '',
      value11: ''
    };
  },
  mounted() {
  },
  methods: {
    handlerChange(val) {
      console.log(val);
    },
    handlerVisibleChange(val) {
      console.log(val);
    },
    remoteMethod(val) {
      this.loading = true;
      setTimeout(() => {
        this.remoteOptions = selectOptions;
        this.loading = false;
      }, 2000);
    }
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
      &.remark {
        font-size: 14px;
        font-weight: normal;
        color: #909399;
      }
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
