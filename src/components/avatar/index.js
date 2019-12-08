import DrAvatar from './src/avatar.vue';

DrAvatar.install = function (Vue) {
  Vue.component(DrAvatar.name, DrAvatar);
};

export default DrAvatar;
