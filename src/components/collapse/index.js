import DrCollapse from './src/collapse.vue';

DrCollapse.install = function (Vue) {
  Vue.component(DrCollapse.name, DrCollapse);
};

export default DrCollapse;
