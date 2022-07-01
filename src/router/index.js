import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import SvgIcon from '../components/SvgIcon'
import AboutView from '../views/AboutView'
import LinkButtons from '../components/LinkButtons'

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
]

const router = new VueRouter({
  routes
})

export default router