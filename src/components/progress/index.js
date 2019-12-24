import DrProgress from './src/progress.vue';

DrProgress.install = function (Vue) {
  Vue.component(DrProgress.name, DrProgress);
};

export default DrProgress;
