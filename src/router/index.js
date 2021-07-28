import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    redirect: '/application/new/step-1'
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: () => import(/* webpackChunkName: "ThankYou" */ '../views/thank-you.vue')
  },
  {
    path: '/application/:id/step-1',
    name: 'Step1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Step1" */ '../views/seller-application.vue')
  },
  {
    path: '/application/:id/step-2',
    name: 'Step2',
    component: () => import(/* webpackChunkName: "Step2" */ '../views/seller-application.vue')
  },
  {
    path: '*',
    name: '',
    redirect: '/application/new/step-1'
  }
]

const router = new VueRouter({
  routes
})

export default router
