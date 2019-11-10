import DrButton from './components/button';
import DrIcon from './components/icon';
import DrButtonGroup from './components/buttonGroup';

const DoranComponents = [
  DrButton,
  DrButtonGroup,
  DrIcon
];

const install = function (Vue, opt = {}) {
  DoranComponents.forEach(component => {
    Vue.component(component.name, component);
  });
};

typeof window !== 'undefined' && window.Vue && install(window.Vue);

export default {
  install,
  DrButton,
  DrButtonGroup,
  DrIcon
};
