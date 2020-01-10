function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    let name = child.$options.name;
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
};

export default {
  methods: {
    dispatch(componentName, eventName, params) { // 向上寻找目标父组件并触发事件
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        };
      };
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      };
    },
    broadcast(componentName, eventName, params) { // 向下寻找目标子孙组件并触发事件
      broadcast.call(this, componentName, eventName, params);
    }
  }
};
