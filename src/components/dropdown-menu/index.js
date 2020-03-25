import DrDropdownMenu from '../dropdown/src/dropdown-menu.vue';

DrDropdownMenu.install = function (Vue) {
  Vue.component(DrDropdownMenu.name, DrDropdownMenu);
};

export default DrDropdownMenu;
