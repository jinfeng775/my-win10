import Vue from 'vue'
import VueRouter from 'vue-router'
import desktop from '../views/desktop.vue'
import calendarMax from '../components/calendarwin10/calendarMax.vue'
import b from '../components/test1/b.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'desktop',
    component: desktop,
    children: [
      {
        path: '/calendarMax',
        name: 'calendarMax',
        component: calendarMax,
      },
      {
        path: 'b',
        name: 'b',
        component: b,
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
