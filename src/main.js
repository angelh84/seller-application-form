import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './tailwind.css'
import VueTailwind from 'vue-tailwind'

import {
  TInput,
  TTextarea,
  TSelect,
  TRadio,
  TButton
} from 'vue-tailwind/dist/components';

const settings = {
  // Use the following syntax
  // {component-name}: {
  //   component: {importedComponentObject},
  //   props: {
  //     {propToOverride}: {newDefaultValue}
  //     {propToOverride2}: {newDefaultValue2}
  //   }
  // }
  't-input': {
    component: TInput
  },
  't-textarea': {
    component: TTextarea,
  },
  't-select': {
    component: TSelect,
  },
  't-radio': {
    component: TRadio,
  },
  't-button': {
    component: TButton,
  }
}

Vue.use(VueTailwind, settings)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
