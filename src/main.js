import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// import 'animate.css';
import './assets/css/animate.min.css'
import echarts from 'echarts' //引入echarts

Vue.prototype.$echarts = echarts //注册组件
Vue.config.productionTip = false
// import "../common/less/index.less";
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')