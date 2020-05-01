import Vue from 'vue'
import VueRouter from 'vue-router'
const CustomPage = () => import('@/pages/custom-page')

Vue.use(VueRouter)
/**
 * 路由管理
 */
const routes = [
  {
    path: '*',
    redirect: '/pages/custom-page'
  },
  {
    path: '/pages/custom-page',
    component: CustomPage,
    meta: {
      title: '定制页面'
    }
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router