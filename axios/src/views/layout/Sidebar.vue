<template>
	<el-menu :default-active="$route.path" class="el-menu-vertical-demo" theme="dark" mode="vertical">
		<template v-for="(route, index) in permissionRoutes" v-if="!route.hidden">
			<el-submenu :index="route.name" v-if="!route.noDropdown">
				<template slot="title">
	                    <wscn-icon-svg :icon-class="route.icon||'wenzhang1'"/>
	                    {{route.name}}
	                </template>
				<router-link v-for="child in route.children" :key="child.path" v-if="!child.hidden"
                             class="title-link" :to="route.path+'/'+child.path">
	                     <el-menu-item :index="route.path+'/'+child.path">
	                     		{{child.name}}
	                     </el-menu-item>
	                </router-link>
			</el-submenu>
			<router-link v-if="route.noDropdown && route.children.length > 0" class="title-link" :to="route.path+'/'+route.children[0].path">
				<el-menu-item :index="route.path+'/'+route.children[0].path">
					<wscn-icon-svg :icon-class="route.icon||'geren1'"/>
					{{ route.children[0].name }}
				</el-menu-item>
			</router-link>
		</template>
	</el-menu>
</template>

<script>
	/*
	*如果侧边栏不分权限访问，则$router.options.routes直接循环即可
	*分权限的话，就要对route进行权限区分
	*/
	import permissionRoutes from 'router/permission';
	export default {
		name: 'Sidebar',
		data() {
			return {
				permissionRoutes: permissionRoutes.get()
			}
		},
		mounted() {
			// console.log(this.permissionRoutes)
		},
		methods: {

		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-menu {
		min-height: 100%;
	}
	.wscn-icon {
		margin-right: 10px;
	}
</style>
