import Vue from 'vue'
import App from './shared/components/template/app/App'
import router from './router'
import VeeValidate, { Validator } from 'vee-validate';
import ptBr from 'vee-validate/dist/locale/pt_BR'
import 'nprogress/nprogress.css'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.use(VeeValidate);
Validator.localize('ptBr', ptBr);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
