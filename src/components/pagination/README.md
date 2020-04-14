# Pagination Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
currentPage|当前页数，支持 .sync 修饰符|number||1
total|总条目数|number||
pageSize|每页显示条目个数，支持 .sync 修饰符|number||
pageSizes|每页显示个数选择器的选项设置|array||[10, 20, 30, 40, 50, 100]
disabled|是否禁用分页器|boolean||false
small|是否展示小型分页器|boolean||false
prevText|自定义prev显示文本|string||
nextText|自定义next显示文本|string||
layout|组件布局|Array|total/pager/sizes/jumper/simplePager|['total', 'pager', 'sizes', 'jumper']

# Pagination Events

事件名|说明|回调参数
-|-|-|
sizeChange|pageSize 改变时会触发|每页条数
currentChange|currentPage改变时会触发|当前页
prevClick|点击上一页后触发|改变后的当前页
nextClick|点击下一页后触发|改变后的当前页