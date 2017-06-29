
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home/index'
import Cart from '@/components/Cart/index'
import List from '@/components/List/index'
import Mine from '@/components/Mine/index'
import Register from '@/components/Mine/register'
import Password from '@/components/Mine/password'

Vue.use(Router)

export default new Router({
  routes: [
    {
	    path: '/',
	    name: 'Home',
	    component: Home
    },
    {
    	path:'/list',
    	name:'List',
    	component: List
    },
    {
      path:'/cart',
      name:'Cart',
      component: Cart
    },
    {
      path:'/mine',
      name:'Mine',
      component: Mine
    },
    {
      path:'/register',
      name:'Register',
      component: Register
    },
    {
      path:'/password',
      name:'Password',
      component: Password
    }
  ]
})
