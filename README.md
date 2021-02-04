# Doran-ui
基于vue(2.x)的一套中后台ui框架
>注：因为没有经过系统的测试和推广，该ui目前仅供学习。
views目录是各个组件的使用demo

在线[预览](https://doranui.github.io/)

## 全局引入
一般在 webpack 入口页面 main.js 中如下配置：
``` js
import Vue from 'vue'
import DoranUi from 'doran'
import 'doran/dist/doran.css' // 引入css
import App from './App.vue'

Vue.use(DoranUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
```

## 按需引入
借助插件[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)可以实现按需加载组件，减少文件体积。首先安装，并在项目根目录文件 .babelrc 中配置：
``` 
npm install babel-plugin-import --save-dev // 安装
```
在.babelrc文件中
```js
{
  "plugins": [["import", {
    "libraryName": "doran",
    "libraryDirectory": "dist/components"
  }]]
}
```
然后这样按需引入组件，就可以减小体积了：
```html
<template>
  <div id="app">
    <dr-button type="error">Doran</dr-button>
    <dr-input placeholder="请输入"></dr-input>
  </div>
</template>

<script>
import { Button, Input } from 'doran'

export default {
  name: 'App',
  components: {
    DrButton: Button,
    DrInput: Input
  }
}
</script>
```
>注意：按需引用仍然需要导入样式，即在 main.js中全局引入

## Version
1.x

## Completed components

* Icon (图标) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/icon)

* Grid (栅格) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/grid)

* Collapse (折叠面板) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/collapse)

* Button (按钮) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/button)

* Radio (单选) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/radio)

* Checkbox (多选) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/checkbox)

* Switch (开关) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/switch)

* Badge (微标) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/badge)

* Avatar (头像) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/avatar)

* Breadcrumb (面包屑) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/breadcrumb)

* Tag (标签) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/tag)

* Progress (进度条) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/progress)

* Rate (评分) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/rate)

* Divider (分割线) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/divider)

* InputNumber (数字输入框) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/input-number)

* Input (输入框) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/input)

* Select (选择器) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/select)

* Pagination (分页器) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/pagination)

* Dropdown (下拉菜单) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/dropdown)

* Card (卡片) [文档说明](https://github.com/ximoThorn/Doran/tree/master/src/components/card)

* Notification (通知) [文档说明](https://github.com/ximoThorn/Doran/blob/master/src/components/notification)

* Popover (弹出框) [文档说明](https://github.com/ximoThorn/Doran/blob/master/src/components/popover)

* tooltip (文字提示) [文档说明](https://github.com/ximoThorn/Doran/blob/master/src/components/tooltip)

