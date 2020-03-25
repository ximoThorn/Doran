
# Input Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
value/v-model|绑定值|string/number||
type|类型|string|输入框类型，可选值为 text、password、textarea、url、email、date、number、tel|text
placeholder|占位文本|string||
disabled|是否禁用输入框|boolean||false
size|尺寸|string|default/medium/small|default
suffixIcon|输入框尾部图标|string||
prefixIcon|输入框头部图标|string||
rows|输入框行数，只对 type="textarea" 有效|string/number||2
resize|控制是否能被用户缩放|string|none/both/horizontal/vertical|
maxlength|最大输入长度|string/number||
clearable|是否可清空|boolean||false
password|是否显示切换密码图标|boolean||false
showWordLimit|是否显示输入字数统计，可以配合 maxlength 使用|boolean||false
autosize|自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }|boolean/object||false
max|设置最大值|string/number||
min|设置最小值|string/number||
step|原生属性，设置输入字段的合法数字间隔|||
readonly|设置是否只读|boolean||false


# Input Events

事件名|说明|回调参数
-|-|-|
change|仅在输入框失去焦点或用户按下回车时触发|当前value值
focus|在 Input 获得焦点时触发|(event: Event)
blur|在 Input 失去焦点时触发|(event: Event)
input|在 Input 值改变时触发|当前value值
clear|在点击由 clearable 属性生成的清空按钮时触发|
keyup|原生的 keyup 事件|(event: Event)
keypress|原生的 keypress 事件|(event: Event)
keydown|原生的 keydown 事件|(event: Event)

# Input Methods

方法名|说明|参数
-|-|-|
focus|使 input 获取焦点|
blur|使 input 失去焦点|
select|选中 input 中的文字|

# Input Slots

name|说明|
-|-|-|
prefix|输入框头部内容，只对 type!=="textarea" 有效|
suffix|输入框尾部内容，只对 type!=="textarea" 有效|
prepend|输入框前置内容，只对 type!=="textarea" 有效|
append|输入框后置内容，只对 type!=="textarea" 有效|