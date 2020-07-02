import DrPopover from './src/popover.vue';

DrPopover.install = function (Vue) {
  Vue.component(DrPopover.name, DrPopover);
};

export default DrPopover;
