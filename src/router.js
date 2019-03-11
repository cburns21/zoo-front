import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cops',
      name: 'Cop Profiles',
      component: () => import(/* webpackChunkName: "about" */ './views/cops.vue')
    },
    {
      path: '/districts',
      name: 'District Map',
      component: () => import(/* webpackChunkName: "about" */ './views/districts.vue')
    },
    {
      path: '/cases',
      name: 'Ongoing Cases',
      component: () => import(/* webpackChunkName: "about" */ './views/cases.vue')
    },
    {
      path: '/Individual/:id',
      name: 'Individual',
      component: () => import(/* webpackChunkName: "about" */'./views/Individual.vue')
    },
    {
      path: '/buttonForm',
      name: 'Form',
      component: () => import(/* webpackChunkName: "about" */'./views/buttonForm.vue')
    }
  ]
})
