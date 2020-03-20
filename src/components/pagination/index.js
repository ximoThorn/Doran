import DrPagination from './src/pagination.vue';

DrPagination.install = function (Vue) {
  Vue.component(DrPagination.name, DrPagination);
};

export default DrPagination;
