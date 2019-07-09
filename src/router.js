import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Signup from "./views/users/Signup.vue";
import Login from "./views/users/Login.vue";
import Logout from "./views/users/Logout.vue";

import AddictionsIndex from "./views/addictions/Index.vue";
import AddictionsNew from "./views/addictions/New.vue";
import AddictionsEdit from "./views/addictions/Edit.vue";
import AddictionsShow from "./views/addictions/Show.vue";

import FourthStepNew from "./views/fourth_steps/New.vue";
import FourthStepShow from "./views/fourth_steps/Show.vue";
import FourthStepEdit from "./views/fourth_steps/Edit.vue";
import FourthStepIndex from "./views/fourth_steps/Index.vue";




Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/addictions',
      name: 'addictions-index',
      component: AddictionsIndex
    },
    {
      path: '/addictions/new',
      name: 'addictions-new',
      component: AddictionsNew
    },
    {
      path: '/addictions/:id/edit',
      name: 'addictions-edit',
      component: AddictionsEdit
    },
    {
      path: '/addictions/:id',
      name: 'addictions-show',
      component: AddictionsShow
    },
    {
      path: '/fourth_steps',
      name: 'fourth-steps-index',
      component: FourthStepIndex
    },
    {
      path: '/fourth_steps/new',
      name: 'fourth-steps-new',
      component: FourthStepNew
    },
    {
      path: '/fourth_steps/:id',
      name: 'fourth-steps-show',
      component: FourthStepShow
    },
    {
      path: '/fourth_steps/:id/edit',
      name: 'fourth-steps-edit',
      component: FourthStepEdit
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
