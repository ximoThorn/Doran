
# Progress Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
percent|百分比|number||
status|状态|string|success/warning/error/active|
type|进度条类型|string|line/circle/dashboard|
showText|是否显示进度条文字内容|boolean||true
strokeWidth|进度条的宽度，单位 px|number||
textInside|进度条显示文字内置在进度条内（只在 type=line 时可用）|boolean||false
strokeColor|进度条的颜色|string/array（例如['#E066FF', '#CDCD00', '#CD2626']）||
width|环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）|string/number||
progressColor|不同进度下呈现不同颜色，比strokeColor优先级高|array（例如：[{color: '#f56c6c',percent: 50},{color: '#e6a23c',percent: 50}]）||
strokeLinecap|circle/dashboard 类型路径两端的形状|string|butt/round/square|round
