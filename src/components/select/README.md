
# Select Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
value/v-model|绑定值|||
placeholder|占位符|string||请选择
placement|弹窗的展开方向|string| top/bottom/top-start/bottom-start/top-end/bottom-end|bottom-start
size|尺寸|string|default/medium/small|default
filterable|是否可搜索|boolean||false
noDataText|选项为空是显示的文本，也可以使用slot="empty"设置|string||无数据
noMatchText|搜索条件无匹配时显示的文字，也可以使用slot="empty"设置|string||无结果
multiple|是否多选|boolean||false
clearable|是否可以清空选项|boolean||false
disabled|是否禁用|boolean||false
remote|是否为远程搜索|boolean||false
loading|是否正在从远程获取数据|boolean||false
loadingText|远程加载时显示的文字|string||加载中
filterMethod|自定义过滤方法|function||
remoteMethod|远程搜索方法|function||

# Select Events

事件名|说明|回调参数
-|-|-|
change|选中值发生变化时触发|当前选中值
visibleChange|下拉框显示隐藏时触发|出现则为 true，隐藏则为 false
clear|单选模式下点击清空按钮时触发|
filterChange|搜索词变化时触发|
removeTag|删除多选tag时触发|移除的tag对应的值

# Select Slots

name|说明
-|-|
empty|无选项时的列表内容

# Option-group Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
label|分组的组名|string||

# Option Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
value|选项的值|string/number/object||
label|选项的标签，若不设置则默认与 value 相同|string/number||
disabled|是否禁用该选项|boolean||false
