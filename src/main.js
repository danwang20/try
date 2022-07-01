import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// import 'animate.css';
import './assets/css/animate.min.css'
Vue.config.productionTip = false
// import "../common/less/index.less";
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
