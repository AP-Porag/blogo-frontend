import Vue from 'vue';
import routes from './router/router';
import App from './App.vue';
import jQuery from 'jquery';
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';

Vue.component('Blog', require('./components/blog/BlogComponent').default);
window.$ = window.jQuery =jQuery;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:routes,
}).$mount('#app')
