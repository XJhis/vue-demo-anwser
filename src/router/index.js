import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/page/home/index.vue'
import Step from '@/page/step/index.vue'
import FormCheck1 from '@/page/home/formCheck1.vue'
import FormCheck2 from '@/page/home/formCheck2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeIndex
    },
    {
      path: '/step',
      name: 'item',
      component: Step
    },
    {
      path: '/check1',
      name: 'login',
      component: FormCheck1
    },
    {
      path: '/check2',
      name: 'login',
      component: FormCheck2
    }
  ]
})
