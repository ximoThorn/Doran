import DrBreadcrumb from './src/breadcrumb.vue';

DrBreadcrumb.install = function (Vue) {
  Vue.component(DrBreadcrumb.name, DrBreadcrumb);
};

export default DrBreadcrumb;
