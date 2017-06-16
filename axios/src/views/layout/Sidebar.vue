<template>
	<el-menu :default-active="$route.path" class="el-menu-vertical-demo" theme="dark" mode="vertical">
		<template v-for="(route, index) in $router.options.routes" v-if="!route.hidden">
			<el-submenu :index="route.path" v-if="!route.noDropdown">
				 <wscn-icon-svg :icon-class="route.icon||'wenzhang1'"/>
				{{ route.path }}
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
	// import permissionRoutes from 'store/permission';
	export default {
		name: 'Sidebar',
		data() {
			return {
			// permissionRoutes: permissionRoutes.get()
			}
		},
		mounted() {
			console.log(this.$router.options.routes)
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
