import Vue from 'vue';
import Vuex from 'vuex';

import leftmenu from './leftmenu';
import userinfo from './userinfo';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		leftmenu,
		userinfo
	}
});



