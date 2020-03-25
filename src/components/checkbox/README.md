
# Checkout Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
value/v-model|绑定值|string/number/boolean||
label|选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）|string|参考 Icon 组件||
trueLabel|绑定选中状态的值|string/number/boolean||
falseLabel|绑定未选中状态的值|string/number/boolean||
disabled|是否禁用|boolean||false
indeterminate|设置 indeterminate 状态，只负责样式控制|boolean||false
border|是否显示边框|boolean||false
size|Checkbox 的尺寸，仅在 border 为真时有效|string|default/medium/small/mini|default

# Checkout Events

事件名|说明|回调参数
-|-|-|
change|当绑定值变化时触发的事件|更新后值

# Checkout-group Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
value/v-model|绑定值|array||
type|类型||button|
size|多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效|string|default/medium/small/mini|default

# Checkout-group Events

事件名|说明|回调参数
-|-|-|
change|当绑定值变化时触发的事件|更新后值
