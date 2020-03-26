import DrButton from './components/button';
import DrIcon from './components/icon';
import DrButtonGroup from './components/button-group';
import DrCollapse from './components/collapse';
import DrCollapseItem from './components/collapse-item';
import DrRadio from './components/radio';
import DrRadioGroup from './components/radio-group';
import DrCheckbox from './components/checkbox';
import DrCheckboxGroup from './components/checkbox-group';
import DrSwitch from './components/switch';
import DrBadge from './components/badge';
import DrAvatar from './components/avatar';
import DrRow from './components/row';
import DrCol from './components/col';
import DrBreadcrumb from './components/breadcrumb';
import DrBreadcrumbItem from './components/breadcrumb-item';
import DrTag from './components/tag';
import DrProgress from './components/progress';
import DrRate from './components/rate';
import DrDivider from './components/divider';
import DrInput from './components/input';
import DrSelect from './components/select';
import DrOption from './components/option';
import DrOptionGroup from './components/option-group';
import DrInputNumber from './components/input-number';
import DrPagination from './components/pagination';
import DrDropdown from './components/dropdown';
import DrDropdownItem from './components//dropdown-item';
import DrDropdownMenu from './components//dropdown-menu';

const DoranComponents = [
  DrButton,
  DrButtonGroup,
  DrIcon,
  DrCollapse,
  DrCollapseItem,
  DrRadio,
  DrRadioGroup,
  DrCheckbox,
  DrCheckboxGroup,
  DrSwitch,
  DrBadge,
  DrAvatar,
  DrRow,
  DrCol,
  DrBreadcrumb,
  DrBreadcrumbItem,
  DrTag,
  DrProgress,
  DrRate,
  DrDivider,
  DrInput,
  DrSelect,
  DrOption,
  DrOptionGroup,
  DrInputNumber,
  DrPagination,
  DrDropdown,
  DrDropdownItem,
  DrDropdownMenu
];

const install = function (Vue, opt = {}) {
  DoranComponents.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$DORAN = {
    transfer: opt.transfer !== undefined ? opt.transfer : true, // popper默认放在body的最后面
    zIndex: opt.zIndex || 2020
  };
};

typeof window !== 'undefined' && window.Vue && install(window.Vue);

export default {
  install,
  DrButton,
  DrButtonGroup,
  DrIcon,
  DrCollapse,
  DrCollapseItem,
  DrRadio,
  DrRadioGroup,
  DrCheckbox,
  DrCheckboxGroup,
  DrSwitch,
  DrBadge,
  DrAvatar,
  DrRow,
  DrCol,
  DrBreadcrumb,
  DrBreadcrumbItem,
  DrTag,
  DrProgress,
  DrRate,
  DrDivider,
  DrInput,
  DrSelect,
  DrOption,
  DrOptionGroup,
  DrInputNumber,
  DrPagination,
  DrDropdown,
  DrDropdownItem,
  DrDropdownMenu
};
