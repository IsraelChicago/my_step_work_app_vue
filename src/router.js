import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Signup from "./views/users/Signup.vue";
import Login from "./views/users/Login.vue";
import Logout from "./views/users/Logout.vue";
import UserShow from "./views/users/Show.vue";
import UserEdit from "./views/users/Edit.vue";


import AddictionsIndex from "./views/addictions/Index.vue";
import AddictionsShow from "./views/addictions/Show.vue";

import FourthStepNew from "./views/fourth_steps/New.vue";
import FourthStepShow from "./views/fourth_steps/Show.vue";
import FourthStepEdit from "./views/fourth_steps/Edit.vue";
import FourthStepIndex from "./views/fourth_steps/Index.vue";

// import TenthStepNew from "./views/tenth_step/New.vue";
// import TenthStepShow from "./views/tenth_step/Show.vue";
// import TenthStepEdit from "./views/tenth_step/Edit.vue";
// import TenthStepIndex from "./views/tenth_step/Index.vue";


import StepWorkNew from "./views/step_works/New.vue";
import StepWorkShow from "./views/step_works/Show.vue";
import StepWorkEdit from "./views/step_works/Edit.vue";
import StepWorkIndex from "./views/step_works/Index.vue";




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
      path: '/users/:id',
      name: 'users-show',
      component: UserShow
    },
    {
      path: '/users/:id/edit',
      name: 'user-edit',
      component: UserEdit
    },
    

    {
      path: '/addictions',
      name: 'addictions-index',
      component: AddictionsIndex
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


    // {
    //   path: '/tenth_step',
    //   name: 'tenth-step-index',
    //   component: TenthStepIndex
    // },
    // {
    //   path: '/tenth_step/new',
    //   name: 'tenth-step-new',
    //   component: TenthStepNew
    // },
    // {
    //   path: '/tenth_step/:id',
    //   name: 'tenth-step-show',
    //   component: TenthStepShow
    // },
    // {
    //   path: '/tenth_step/:id/edit',
    //   name: 'tenth-step-edit',
    //   component: TenthStepEdit
    // },


    {
      path: '/step_works',
      name: 'step-works-index',
      component: StepWorkIndex
    },
    {
      path: '/step_works/new',
      name: 'step-works-new',
      component: StepWorkNew
    },
    {
      path: '/step_works/:id',
      name: 'step-works-show',
      component: StepWorkShow
    },
    {
      path: '/step_works/:id/edit',
      name: 'step-works-edit',
      component: StepWorkEdit
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
