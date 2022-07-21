import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import SvgIcon from '../components/SvgIcon'
import AboutView from '../views/AboutView'
import LinkButtons from '../components/LinkButtons'
import Track from '../components/Track'
import Echarts from '../components/Echarts'
// import EchartsAll from '../components/EchartsAll'
import ScrollTry from '../components/scrollTry'
import TreeTry from '../components/TreeTry'
import Gzp from '../components/Gzp' //flexTry
import flexTry from '../components/flexTry' //flexTry TopTitle
import flexTry1 from '../components/flexTry1' //flexTry TopTitle
import TopTitle from '../components/TopTitle'
import TableTry from '../components/tableTry' //TableTry

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
  // {
  //   path: '/EchartsAll',
  //   name: 'EchartsAll',
  //   component: EchartsAll
  // },
  {
    path: '/ScrollTry',
    name: 'ScrollTry',
    component: ScrollTry
  },
  {
    path: '/TreeTry',
    name: 'TreeTry',
    component: TreeTry
  },
  {
    path: '/Gzp',
    name: 'Gzp',
    component: Gzp
  },
  {
    path: '/flexTry',
    name: 'flexTry',
    component: flexTry
  },
  {
    path: '/flexTry1',
    name: 'flexTry1',
    component: flexTry1
  },
  {
    path: '/TopTitle',
    name: 'TopTitle',
    component: TopTitle
  },
  {
    path: '/TableTry',
    name: 'TableTry',
    component: TableTry
  },
]

const router = new VueRouter({
  routes
})

export default router