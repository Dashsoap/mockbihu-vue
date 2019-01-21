import Vue from 'vue';
import App from './App.vue';
import router from './router';
import IconSvg from './components/icon-svg'

Vue.config.productionTip = false;
Vue.component('icon-svg', IconSvg)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
