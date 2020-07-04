
# Popover Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
title|标题|string||
content|内容文字|string||
trigger|触发方式|string|click/focus/hover/custom|hover
width|popover的宽度|string||最小宽度150px
placement|popover的显示位置 |string|top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end|top-start
visible|是否显示popover, 配合trigger = "custom"使用|boolean||false
showArrow|是否显示箭头|boolean||false
popoverClass|为popover的class名|string||
offset|偏移量|Number||12


# Popover Slot

name|说明|
-|-|
content| 自定义内容|