import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/Index.vue'
import Position from '../pages/Position.vue'
import Search from '../pages/Search.vue'
import Mine from '../pages/Mine.vue'
import Detail from '../pages/Detail.vue'
import Page404 from '../pages/404.vue'
import City from '../pages/City.vue'
import IndexMain from '../pages/IndexMain.vue'
import Car from '../pages/Car.vue'
import Login from '../pages/Login.vue'
import BuyLimit from '../pages/BuyLimit.vue'
import confirm from '../pages/car/confirm.vue'
import success from '../pages/car/success.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
	    component: Index,
	    redirect: '/indexMain',
	    children: [
	   	 	{
	        path: '/indexMain',
	        component: IndexMain,
	        props: {isIndex:true}
	      },
        {
          path: '/position',
          component: Position
        },
        {
          path: '/search',
          component: Search,
          name: 'search'
        },
        {
          path: '/mine',
          component: Mine,
          name: 'mine'
        },
        {
          path: '/city',
          component: City
        },
	      {
	        path: '/car',
	        component: Car
	      },
	      {
	        path: '/confirm',
	        component: confirm
	      },
	      {
	        path: '/success',
	        component: success
	      }
      ]
    },
    {
      path: '/detail',
      component: Detail,
      name: 'detail'
    },
    {
      path: '/login',
      component: Login,
      name:'login'
    },
    {
      path: '/buyLimit',
      component: BuyLimit,
      name:'buyLimit'
    },
    {
      path: '*',
      component: Page404
    }
  ]
})
