import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '../pages/index'
//import HelloIndex from '@/components/index'
//import HelloInput from '@/components/input'
//import HelloList from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: HomeIndex
    }
  ]
})
