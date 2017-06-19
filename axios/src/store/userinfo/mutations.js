import * as types from './mutations_types'

export default {
	[types.SET_AUTH_TYPE](state, type) {
		state.auth_type = type;
	},
	[types.SET_CODE](state, code) {
		state.code = code;
	},
	[types.SET_TOKEN](state, token) {
		state.token = token;
	},
	[types.SET_EMAIL](state, email) {
		state.email = email;
	},
	[types.SET_ROLES](state, roles) {
		state.roles = roles;
	},
	[types.SET_INTRODUCTION](state,introduction) {
		state.introduction = introduction;
	},
	[types.SET_NAME](state, name) {
		state.name = name;
	},
	[types.SET_AVATAR](state, avatar) {
		state.avatar = avatar;
	}
}