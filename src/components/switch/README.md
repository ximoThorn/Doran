
# Switch Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
value/v-model|绑定值|string/number/Boolean||0
trueLabel|switch 打开时的值|string/number/Boolean||
falseLabel|switch 关闭时的值|string/number/Boolean||
trueColor|switch 打开时的颜色|string||#f5a623
falseColor|switch 关闭时的颜色|string||#ed4014
loading|是否开启loading|boolean||false
disabled|是否禁用|boolean||false

# Switch Events

事件名|说明|回调参数
-|-|-|
change|switch 状态发生变化时的回调函数|改变后的状态的值


# Switch Slots

name|说明
-|-|
open|自定义switch打开时的显示内容
close|自定义switch关闭时的显示内容