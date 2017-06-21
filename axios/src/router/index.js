import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

/* layout 所有页面公用的视图*/
import Layout from '../views/layout/Layout';

/*login
*@因为只是简单页面，故不用异步加载
*/
import Login from '@/views/login/index'
import sendpwd from '@/views/login/sendpwd'
import reset from '@/views/login/reset'

// dashboard
const dashboard = resolve => require(['../views/dashboard/index'], resolve);

// Introduction
const Introduction = resolve => require(['../views/introduction/index'], resolve); 

// permission
const Permission = resolve => require(['../views/permission/index'], resolve);

//error pages
const err404 = resolve => require(['../views/error/404'], resolve);
const err401 = resolve => require(['../views/error/401'], resolve);

Vue.use(Router)

export default new Router({
	routes: [
		{path: '/login', component: Login, hidden: true},
		{path: '/sendpwd', component: sendpwd, hidden: true},
		{path: '/reset', component: reset, hidden: true},
		{ path: '/404', component: err404, hidden: true },
		{ path: '/401', component: err401, hidden: true },
		{
			path: '/',
			component: Layout,
			redirect: '/dashboard',
			name: '首页',
			hidden: true,
			children: [{ path: 'dashboard', component: dashboard }]
		},
		{
			path: '/introduction',
			component: Layout,
			redirect: '/introduction/index',
			name: '简述',
			icon: 'xinrenzhinan',
			noDropdown: true,
			children: [
				{path: 'index', component: Introduction, name: '简述'}
			]
		},
		{
			path: '/permission',
			component: Layout,
			redirect: '/permission/index',
			name: '权限测试',
			icon: 'quanxian',
			meta: {role: ['admin']},//这个页面只有role==admin才能访问
			noDropdown: true,
			children: [
				{path: 'index', component: Permission, name: '权限测试页',meta: {role: ['admin']}}
			]
		},
		{
			path: '/errorpage',
			component: Layout,
			redirect: 'noredirect',
			name: '错误页面',
			icon: '404',
			children: [
				{path: '401', component: err401, name: '401'},
				{path: '404', component: err404, name: '404'}
			]
		},
		{path: '*', redirect: '/404', hidden: true}
	]
})
