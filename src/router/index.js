import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/page/home/index.vue'
import Step from '@/page/step/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeIndex
    },
    {
      path: '/step/:id',
      name: 'item',
      component: Step
    }
  ]
})
