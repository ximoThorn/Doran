
# Dropdown Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
placement|菜单弹出位置|string|top/top-start/top-end/bottom/bottom-start/bottom-end|bottom-start
trigger|触发方式，可选值为 hover（悬停）click（点击）contextMenu（右键）custom（自定义），使用 custom 时，需配合 visible 一起使用|string||hover
visible|手动控制下拉框的显示，在 trigger = 'custom' 时使用|boolean||false

# Dropdown Events

事件名|说明|回调参数
-|-|-|
clickChange|点击item的回调事件|当前item绑定的name值

# Dropdown-item Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
name|绑定该项的值|string||
disabled|是否禁用该选项|string||false
divided|是否添加分割线|boolean||false