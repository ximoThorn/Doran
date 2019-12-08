import DrBadge from './src/badge.vue';

DrBadge.install = function (Vue) {
  Vue.component(DrBadge.name, DrBadge);
};

export default DrBadge;
