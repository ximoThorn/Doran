import DrTooltip from './src/tooltip.vue';

DrTooltip.install = function (Vue) {
  Vue.component(DrTooltip.name, DrTooltip);
};

export default DrTooltip;
