import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Anmeldung from '../components/Anmeldung.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Anmeldung',
    component: Anmeldung
  },
  {
    path: '/survey/:umfrageID',
    name: 'MitarbeiterUmfrage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "mitarbeiterUmfrage" */ '../views/MitarbeiterUmfrageView.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "admin" */ '../views/AdminView.vue')
  },
  { path: "*",
  component: () => import(/* webpackChunkName: "pageNotFound" */ '../views/PageNotFound.vue') }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
