import DrButton from './src/button.vue';

DrButton.install = function (Vue) {
  Vue.component(DrButton.name, DrButton);
};

export default DrButton;
