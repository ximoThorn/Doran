import DrButton from './components/button';
import DrIcon from './components/icon';
import DrButtonGroup from './components/buttonGroup';
import DrCollapse from './components/collapse';
import DrCollapseItem from './components/collapse-item';

const DoranComponents = [
  DrButton,
  DrButtonGroup,
  DrIcon,
  DrCollapse,
  DrCollapseItem
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
  DrIcon,
  DrCollapse,
  DrCollapseItem
};
