import Cookies from 'js-cookie'
export default {
	user: '',
	status: '',
	email: '1052036428@qq.com',
	code: '',
	uid: undefined,
	auth_type: '',
	token: Cookies.get('X-Ivanka-Token'),
	name: 'mzong',
	avatar: '../../static/images/logo.jpg',
	introduction: '',
	roles: [],
	setting: {
		articlePlatform: []
	}
}