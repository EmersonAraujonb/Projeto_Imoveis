import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CadastroHomePage from '../views/CadastroHomePage.vue'
import LoginHomePage from '../components/LoginHomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
   
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/financiamento',
    name: 'financiamento',

    component: () => import('../views/Financiamento.vue')
  },
  {
    path: '/CadastroHomePage',
    name: 'CadastroHomePage',

    component: () => import('../views/CadastroHomePage.vue')
  },
  {
    path: '/LoginHomePage',
    name: 'LoginHomePage',

    component: () => import('../components/LoginHomePage.vue')
  },
  {
    path: '/LoginCadastro',
    name: 'LoginCadastro',

    component: () => import('../views/LoginCadastro.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
