import { loginByEmail, logout, getInfo } from 'api/login';
import Cookies from 'js-cookie';

export default {
	// 获取用户信息
	GetInfo({ commit, state }) {
		return new Promise((resolve, reject) => {
			getInfo(state.token).then(response => {
				const data = response.data;
				commit('SET_ROLES', data.role);
				commit('SET_NAME', data.name);
				commit('SET_AVATAR', data.avatar);
				commit('SET_INTRODUCTION', data.introduction);
				resolve(response);
			}).catch(error => {
				reject(error);
			});
		});
	},
	//邮箱登录
	LoginByEmail({ commit }, userInfo) {
		return new Promise((resolve, reject) => {
			loginByEmail(userInfo.email,userInfo.password).then(response => {
				const data = response.data;
				Cookies.set('X-Ivanka-Token', data.token);
				commit('SET_TOKEN', data.token);
				commit('SET_EMAIL', userInfo.email);
				resolve();
			}).catch(error => {
				reject(error);
			});
		});
	},
	//登出
	LogOut({ commit, state }) {
		return new Promise((resolve, reject) => {
			logout(state.token).then(() => {
				commit('SET_TOKEN', '');
				commit('SET_ROLES', []);
				Cookies.remove('X-Ivanka-Token');
				resolve();
			}).catch(err => {
				reject(err);
			});
		});
	}
}