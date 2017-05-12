// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 使用element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css';
import * as filters from './filters'
import './mock/index.js'

Vue.config.productionTip = false
// 注册全局插件
Vue.use(Element)

//注册全局filters
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})


/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
