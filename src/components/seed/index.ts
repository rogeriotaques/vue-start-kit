import * as helpers from './utils/helpers';

import SAlert from './components/alert.vue';
import SBadge from './components/badge.vue';
import SButton from './components/button.vue';
import SSpinner from './components/spinner.vue';
import SProgressBar from './components/progress-bar.vue';
import SInput from './components/input.vue';

const version = '0.1.0';

const components = { SAlert, SBadge, SButton, SSpinner, SProgressBar, SInput };

const install: any = (Vue: any, config = {}): void => {
  if (install.installed) {
    return;
  }

  Object.keys(components).forEach((key): void => {
    // eslint-disable-next-line
    // @ts-ignore
    const component = components[key];
    Vue.component(component.name, component);
  });
};

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const SeedVue = { install, version, ...components, ...helpers };

export default SeedVue;
module.exports = SeedVue;
