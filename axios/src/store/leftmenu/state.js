import Cookies from 'js-cookie'
export default {
	sidebar: {
		opened: !+Cookies.get('sidebarStatus')
	}
}