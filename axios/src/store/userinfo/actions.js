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
}