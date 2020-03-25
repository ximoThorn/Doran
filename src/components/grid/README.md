# Col Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
span|栅格占据的列数|string/number||24
offset|栅格左侧的间隔格数|string/number||
push|栅格向右移动格数|string/number||
pull|栅格向左移动格数|string/number||
xs|<768px 响应式栅格数或者栅格属性对象|number/object(例如： {span: 4, offset: 4})||
sm|≥768px 响应式栅格数或者栅格属性对象|number/object(例如： {span: 4, offset: 4})||
md|≥1024px 响应式栅格数或者栅格属性对象|number/object(例如： {span: 4, offset: 4})||
lg|≥1200px 响应式栅格数或者栅格属性对象|number/object(例如： {span: 4, offset: 4})|||
xl|≥1920px 响应式栅格数或者栅格属性对象|number/object(例如： {span: 4, offset: 4})||


# Row Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
gutter|栅格间隔|number||0
type|布局模式，可选 flex，现代浏览器下有效|string||
justify|flex 布局下的水平排列方式|string|start/end/center/space-around/space-between|start
align|flex 布局下的垂直排列方式|string|top/middle/bottom|top