
# Notification Attributes

参数|说明|类型|可选值|默认值
-|-|-|-|-|
title|标题|string||
message|说明文字|string||
duration|显示时间, 毫秒。设为 0 则不会自动关闭|number||3000
type|主题样式|string|success/warning/info/error|
iconType|自定义图标的类名。若设置了 type，则 iconType 会被覆盖|string||
showClose|是否显示关闭按钮|boolean||true
onClose|通知关闭时的回调|function||
onClick|点击通知时的回调|function||
dangerouslyUseHTMLString|自定义message，可以是HTML字符串|string||
customClass|自定义类名|string||


# Notification Methods
>执行this.$Notice方法后会返回一个promise，该promise的then方法接受一个唯一参数为当前Notification实例的函数，如果需要手动关闭实例，可以调用它的 close 方法

示例：
``` js
this.$Notice.open({
  title: 'title',
  message: 'message',
  duration: 0
}).then(_this => {
  console.log(_this, '返回当前的Notification的实例');
  // _this.close(); // 关闭当前Notification
})
```

方法名|说明|
-|-|
close|关闭当前的 Notification|

