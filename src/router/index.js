import Vue from 'vue'
import VueRouter from 'vue-router'
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
  },
  {
    path: '/Contato',
    name: 'Contato',
    component: () => import('../views/Contato.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token')
  if (to.name !== 'LoginHomePage' && !token) {
    next({ name: 'LoginHomePage' });
  } else {
    next();
  }
});
export default router
// export default router
// router.beforeEach((to, from, next) => {
//   const token = sessionStorage.getItem('token')
//   if (token && to.name === 'LoginHomePage') {
//     return next(false)
//   }else if (token || to.name === 'LoginHomePage') {
// 		return next()
// 	} else {
//    return next({name: 'LoginHomePage'})
//   }
// });