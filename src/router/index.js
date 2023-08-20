import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes =  [
    {
        path: '/',
        redirect: 'home-component',
        name: 'home',
        component: () => import('@/components/StickMan.vue'),
        children: [
          {
            path: 'home-component',
            name:'ke',
            // component: () => import('@/components/StickMan.vue')
          },
        ]
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('@/components/ManageSelection.vue')
    },
]

const router = new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: routes
  })

export default router