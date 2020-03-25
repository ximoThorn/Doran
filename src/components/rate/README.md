
# Rate Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
value/v-model|绑定值|number||0
count|star 总数|number||5
icon|使用图标的类名|string|参考icon组件|dr-icon-favorfill
activeColor|激活状态下的颜色|string||#f5a623
colors|设置每个分段下激活状态的颜色|array（例如：[{color:'#99A9BF', rate:2},{color:'#F7BA2A', rate:4},{color:'#FF9900', rate:5}]）||
unColor|未激活时的颜色|string||
customIcon|使用自定义图标|string||
allowHal|是否允许半选|boolean||false
disabled|是否禁用|boolean||false

# Rate Events

事件名|说明|回调参数
-|-|-|
change|分值改变时触发|改变后的分值