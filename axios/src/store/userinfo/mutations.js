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
	}
}