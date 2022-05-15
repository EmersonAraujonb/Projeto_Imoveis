import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginCadastro from '@/views/LoginCadastro.vue'
import CadastroHomePage from '../components/CadastroHomePage.vue'
import LoginHomePage from '../components/LoginHomePage.vue'
import CompraVenda from '@/views/CompraVenda.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'error404',
    component: () => import('../views/Error404.vue')
  },
 {
   path: '/',
   name: '/',
   component: () => import('../views/HomePage.vue')
 },
  {
    path: '/LoginCadastro',
    name: 'Login|Cadastro',
    component:  () => import('../views/LoginCadastro.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/CompraVenda',
    name: 'compra e venda',
    component: () => import('../views/CompraVenda.vue')
  },
  {
    path: '/CadastroHomePage',
    name: 'CadastroHomePage',
    component: () => import('../components/CadastroHomePage.vue')
  },
  {
    path: '/LoginHomePage',
    name: 'LoginHomePage',
    component: () => import('../components/LoginHomePage.vue')
  },
  {
    path: '/Imoveis',
    name: 'Imoveis',
    component: () => import('../views/Imoveis.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
