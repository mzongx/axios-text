import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

// login
import Login from '../views/login/index'
import reset from '../views/login/reset'


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: Hello,
			name: '首页',
			hidden: true
		},
		{path: '/login', component: Login, hidden: true},
		{path: '/reset', component: reset, hidden: true}
	]
})
