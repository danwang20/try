import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/animate.min.css'
import echarts from 'echarts' //引入echarts
import scroll from "vue-seamless-scroll";
import './assets/css/common.css'

import './assets/css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './assets/css/theme/theme-origin.css'
import './assets/css/element-rewrite.css'
// import './assets/css/animate.min.css' //已有
// import './assets/css/common.css' //已有
import store from './store'
import less from 'less'


Vue.use(less)
Vue.use(scroll);
Vue.prototype.$echarts = echarts //注册组件
Vue.config.productionTip = false
// import "../common/less/index.less";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')