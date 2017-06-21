const permission = {
	permissionRoutes: [],//这是权限路由列表
	init(data) {
		const roles = data.roles;//roles: admin,editor,develop
		const router = data.router;
		/*以下对router进行过滤，返回过滤后的路由,
		*先过滤父路由，在同样的方法过滤子路由
		*/
		const permissionRoutes = router.filter(v => {
			if (roles.indexOf('admin') >= 0) return true;
			if (this.hasPermission(roles, v)) {//根据这个判断roles
				if(v.children && v.children.length > 0) {
					v.children = v.children.filter(child => {
						if (this.hasPermission(roles, child)) {
							return child;
						}
						return false;
					});
					return v;
				}else {
					return v;
				}
			}
			return false;
		});
		this.permissionRoutes = permissionRoutes;
	},
	get() {
		return this.permissionRoutes;
	},
	hasPermission(roles, route) {
		if (route.meta && route.meta.role) {
			return roles.some(role => route.meta.role.indexOf(role) >= 0)
		}else {
			return true;
		}
	}
}

export default permission;