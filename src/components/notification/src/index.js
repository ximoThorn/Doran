import Vue from 'vue';
import Notification from './notification.vue';

Notification.newInstance = (_props = {}) => {
  const Instance = new Vue({ // 生成一个实例，也就是组件， 该组件去渲染子组件Notification
    render(createElement) {
      return createElement(Notification, {
        props: _props
      })
    }
  });

  const component = Instance.$mount(); // 生成未挂载的实例（未在dom中）

  document.body && document.body.appendChild(component.$el); // 将该实例添加到dom中

  const notification = Instance.$children[0]; // 拿到最新的Notification组件实例

  return {
    notice(options = {}, type = 'default') {
      notification.add(options, type)
    },
    remove() {}
  }
};

export default Notification;
