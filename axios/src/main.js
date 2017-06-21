// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 使用element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css';
import './styles/index.scss';
import 'components/Icon-svg/index';
import 'assets/iconfont/iconfont';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'normalize.css/normalize.css';
import * as filters from './filters'
import './mock/index.js'

Vue.config.productionTip = false
// 注册全局插件
Vue.use(Element)

//注册全局filters
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
});

function hasPermission(roles, permissionRoles) {
	if (roles.indexOf('admin') >= 0) return true;
	return roles.some(role => permissionRoles.indexOf(role) >= 0);
}

// register global progress.
const whiteList = ['/login', '/authredirect', '/reset', '/sendpwd'];// 不重定向白名单
router.beforeEach((to, from, next) => {
	NProgress.start();
	//这里要判断是否登录了，来指定返回登录页或首页
	if (store.getters.token) {
		if (to.path === '/login') {
			//如果已经登录,但是用户手动改地址都login
			next('/');
		}else {
			//这里要判断下，登录之后，不同账号不同权限，当跳转到指定页面时，以权限给不给访问
			if (to.meta && to.meta.role) {
				hasPermission(store.getters.roles, to.meta.role) ? next() : next('/401');
			}else {
				next();
			}
		}
		NProgress.done();
	}else {
		if (whiteList.indexOf(to.path) !== -1) {
			next();
		}else {
			next('/login');
		}
	}
});

router.afterEach(() => {
	NProgress.done();
});


/* eslint-disable no-new */
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
