import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    redirect: '/step-1'
  },
  {
    path: '/step-1',
    name: 'Step1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Step1" */ '../views/profile.vue')
  },
  {
    path: '/step-2',
    name: 'Step2',
    component: () => import(/* webpackChunkName: "Step2" */ '../views/tell-us-about-yourself.vue')
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: () => import(/* webpackChunkName: "ThankYou" */ '../views/success.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
