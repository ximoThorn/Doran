
# Radio Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
value/v-model|绑定值|string/boolean/number||
label|Radio 的 value|string/boolean/number||
disabled|是否禁用|boolean||false
border|是否显示边框|boolean||false
size|尺寸，只在border为true时有效|string|medium/small/mini|


# Radio Events

事件名|说明|回调参数
-|-|-|
change|绑定值变化时触发的事件|选中的 Radio label 值


# Radio-group Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
value/v-model|绑定值|string/boolean/number||
type|可选值为 button 或不填，为 button 时使用按钮样式|string|button|
size|尺寸，只在type为button时有效|string|medium/small/mini|


# Radio-group Events

事件名|说明|回调参数
-|-|-|
change|绑定值变化时触发的事件|选中的 Radio label 值