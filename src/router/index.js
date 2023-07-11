import { createRouter, createWebHistory } from 'vue-router'
import ListaJuegos from '../views/ListaJuegos.vue'
import NotFound from '@/components/NotFound.vue'
import Opiniones from '@/views/Opiniones.vue'
import Administracion from '@/components/Administracion.vue'

const routes = [
  {
    path: '/',
    name: 'listajuegos',
    component: ListaJuegos
  },
  {
    path: '/opiniones/:nombre',
    name: 'opiniones',
    component: Opiniones,
    props: true,
  },
  {
    path: '/administracion/:nombre',
    name: 'Administracion',
    component: Administracion,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: 'notfound',
    component: NotFound
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
