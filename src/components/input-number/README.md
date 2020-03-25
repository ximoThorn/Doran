
# Input-number Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
value/v-model|绑定值|number||
placeholder|占用文本|string||
disabled|是否禁用|boolean||false
readonly|设置时候只读|boolean||false
max|设置最大值|number||
min|设置最小值|number||
step|计数器步长|number||1
editable|是否可编辑输入|boolean||false
precision|设置数值精度，必须是一个非负整数|number||0
size|尺寸|string|default/medium/small|default

# Input-number Events

事件名|说明|回调参数
-|-|-|
change|绑定值被改变时触发|当前值value
focus|输入框获取焦点时触发|(event: Event)
blur|输入框失去焦点时触发|(event: Event)

# Input-number Methods

方法名|说明|参数
-|-|-|
focus|使 input 获取焦点|
blur|使 input 失去焦点|
