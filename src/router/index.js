import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import SvgIcon from '../components/SvgIcon'
import AboutView from '../views/AboutView'
import LinkButtons from '../components/LinkButtons'
import Track from '../components/Track'
import Echarts from '../components/Echarts'
import EchartsAll from '../components/EchartsAll'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AboutView',
    name: 'AboutView',
    component: AboutView
  },
  // {
  //   path: '/SvgIcon',
  //   name: 'SvgIcon',
  //   component: SvgIcon
  // },
  {
    path: '/LinkButtons',
    name: 'LinkButtons',
    component: LinkButtons
  },
  {
    path: '/Track',
    name: 'Track',
    component: Track
  },
  {
    path: '/Echarts',
    name: 'Echarts',
    component: Echarts
  },
  {
    path: '/EchartsAll',
    name: 'EchartsAll',
    component: EchartsAll
  },
]

const router = new VueRouter({
  routes
})

export default router