<template>
  <div class="drop-down-page">
    <p>基本用法</p>
    <div>
      <dr-dropdown>
        <span class="drop-down-link">下拉菜单</span>
        <dr-icon icon="dr-icon-arrow-down"></dr-icon>
        <dr-dropdown-menu slot="dropdown">
          <dr-dropdown-item
            v-for="(item, index) in dropdownOptions"
            :key="index"
            :disabled="item.disabled"
            :divided="item.divided">
            {{item.label}}
          </dr-dropdown-item>
        </dr-dropdown-menu>
      </dr-dropdown>
      <dr-dropdown class="drop-down-button">
        <dr-button
          type="primary"
          size="mini">
          <span class="drop-down-button-link">下拉菜单</span>
          <DrIcon icon="dr-icon-arrow-down" />
        </dr-button>
        <dr-dropdown-menu slot="dropdown">
          <dr-dropdown-item
            v-for="(item, index) in dropdownOptions"
            :key="index">
            {{item.label}}
          </dr-dropdown-item>
        </dr-dropdown-menu>
      </dr-dropdown>
    </div>
    <p>触发方式</p>
    <div>
      <dr-dropdown class="drop-down-item">
        <span class="drop-down-link">hover触发</span>
        <dr-icon icon="dr-icon-arrow-down"></dr-icon>
        <dr-dropdown-menu slot="dropdown">
          <dr-dropdown-item
            v-for="(item, index) in dropdownOptions"
            :key="index">
            {{item.label}}
          </dr-dropdown-item>
        </dr-dropdown-menu>
      </dr-dropdown>
      <dr-dropdown trigger="click" class="drop-down-item">
        <span class="drop-down-link">click触发</span>
        <dr-icon icon="dr-icon-arrow-down"></dr-icon>
        <dr-dropdown-menu slot="dropdown">
          <dr-dropdown-item
            v-for="(item, index) in dropdownOptions"
            :key="index">
            {{item.label}}
          </dr-dropdown-item>
        </dr-dropdown-menu>
      </dr-dropdown>
      <dr-dropdown trigger="contextMenu" class="drop-down-item">
        <span class="drop-down-link">右键触发</span>
        <dr-icon icon="dr-icon-arrow-down"></dr-icon>
        <dr-dropdown-menu slot="dropdown">
          <dr-dropdown-item
            v-for="(item, index) in dropdownOptions"
            :key="index">
            {{item.label}}
          </dr-dropdown-item>
        </dr-dropdown-menu>
      </dr-dropdown>
      <dr-dropdown trigger="custom" :visible="visible" class="drop-down-item">
        <div @click="handleOpen">
          <span class="drop-down-link">自定义触发</span>
          <dr-icon icon="dr-icon-arrow-down"></dr-icon>
        </div>
        <dr-dropdown-menu slot="dropdown">
          <p style="padding: 10px;">常用于各种自定义下拉内容的场景。</p>
          <div style="text-align: right; margin-right: 10px;">
            <dr-button type="primary" size="small" @click="handleClose">关闭</dr-button>
          </div>
        </dr-dropdown-menu>
      </dr-dropdown>
    </div>
    <p>菜单位置</p>
    <div>
      <dr-dropdown class="drop-down-item">
        <span class="drop-down-link">下拉菜单(居左)</span>
        <dr-icon icon="dr-icon-arrow-down"></dr-icon>
        <dr-dropdown-menu slot="dropdown">
          <dr-dropdown-item
            v-for="(item, index) in dropdownOptions"
            :key="index">
            {{item.label}}
          </dr-dropdown-item>
        </dr-dropdown-menu>
      </dr-dropdown>
      <dr-dropdown placement="bottom" class="drop-down-item">
        <span class="drop-down-link">下拉菜单(居中)</span>
        <dr-icon icon="dr-icon-arrow-down"></dr-icon>
        <dr-dropdown-menu slot="dropdown">
          <dr-dropdown-item
            v-for="(item, index) in dropdownOptions"
            :key="index">
            {{item.label}}
          </dr-dropdown-item>
        </dr-dropdown-menu>
      </dr-dropdown>
      <dr-dropdown placement="bottom-end" class="drop-down-item">
        <span class="drop-down-link">下拉菜单(居右)</span>
        <dr-icon icon="dr-icon-arrow-down"></dr-icon>
        <dr-dropdown-menu slot="dropdown">
          <dr-dropdown-item
            v-for="(item, index) in dropdownOptions"
            :key="index">
            {{item.label}}
          </dr-dropdown-item>
        </dr-dropdown-menu>
      </dr-dropdown>
    </div>
    <p>绑定值</p>
    <div>
      <dr-dropdown @clickChange="clickChange">
        <span class="drop-down-link">下拉菜单</span>
        <dr-icon icon="dr-icon-arrow-down"></dr-icon>
        <dr-dropdown-menu slot="dropdown">
          <dr-dropdown-item
            v-for="(item, index) in dropdownOptions"
            :key="index"
            :disabled="item.disabled"
            :name="item.value">
            {{item.label}}
          </dr-dropdown-item>
        </dr-dropdown-menu>
      </dr-dropdown>
    </div>
  </div>
</template>

<script>
const dropdownOptions = [
  {
    label: '素还真',
    value: 'suhuanzhen',
    disabled: false,
    divided: false
  },
  {
    label: '一页书',
    value: 'yiyeshu',
    disabled: true,
    divided: false
  },
  {
    label: '叶小钗',
    value: 'yexiaochai',
    disabled: false,
    divided: false
  },
  {
    label: '玉逍遥',
    value: 'yuxiaoyao',
    disabled: false,
    divided: false
  },
  {
    label: '君奉天',
    value: 'junfengtian',
    disabled: false,
    divided: true
  }
];
export default {
  data() {
    return {
      dropdownOptions,
      visible: false
    };
  },
  methods: {
    clickChange(val) {
      console.log('click', val);
    },
    handleOpen() {
      this.visible = true;
    },
    handleClose() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
  .drop-down-page {
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
      .drop-down-link {
        display: inline-block;
        vertical-align: middle;
        height: 16px;
        line-height: 16px;
        color: #2d8cf0;
      }
      i {
        color: #2d8cf0;
      }
      .drop-down-button {
        margin-left: 20px;
        .drop-down-button-link {
          color: #ffffff;
          vertical-align: middle;
        }
        i {
          color: #ffffff;
        }
      }
      .drop-down-item {
        margin-left: 20px;
      }
    }
  }
</style>
