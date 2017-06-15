<template>
	<el-menu :default-active="$route.path" class="el-menu-vertical-demo" theme="dark" mode="vertical">
		<template v-for="(route, index) in $router.options.routes" v-if="!route.hidden">
			<el-submenu :index="route.path" v-if="!route.noDropdown">
				 <!-- <wscn-icon-svg :icon-class="route.icon||'wenzhang1'"/> -->
				{{ route.path }}
			</el-submenu>
			<router-link v-if="route.noDropdown && route.children.length > 0" class="title-link" :to="route.path+'/'+route.children[0].path">
				<el-menu-item :index="route.path+'/'+route.children[0].path">
					<wscn-icon-svg :icon-class="route.icon||'geren1'"/>
					{{ route.children[0].name }}
				</el-menu-item>
			</router-link>
		</template>
		<!-- <el-submenu index="1">
			<template slot="title"><i class="el-icon-message"></i>导航一</template>
			<el-menu-item-group>
				<template slot="title">分组一</template>
				<el-menu-item index="1-1">选项1</el-menu-item>
				<el-menu-item index="1-2">选项2</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group title="分组2">
				<el-menu-item index="1-3">选项3</el-menu-item>
			</el-menu-item-group>
			<el-submenu index="1-4">
				<template slot="title">选项4</template>
				<el-menu-item index="1-4-1">选项1</el-menu-item>
			</el-submenu>
		</el-submenu>
		<el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
		<el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item> -->
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
