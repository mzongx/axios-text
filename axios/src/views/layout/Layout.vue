<template>
	<div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
		<div class="sidebar-wrapper">
			<Sidebar class="sidebar-container"/>
		</div>
		<div class="main-container">
			<Navbar/>
			<App-main/>
		</div>
	</div>
</template>

<script>
	import { AppMain ,Sidebar ,Navbar } from './index';
	import { mapGetters } from 'vuex'
	import store from 'store';
	import router from 'router';
	import permission from 'router/permission';
	// import { Loading } from 'element-ui';
	// let loadingInstance;
	export default {
		name: 'layout',
		components: {
			Navbar,
			Sidebar,
			AppMain
		},
		computed: {
			...mapGetters([
				'sidebar'
			])
		},
		beforeRouteEnter(to, from, next) {
			const roles = store.getters.roles;//因为这里是route，所以不能用this.$store
			if (roles.length !== 0) {//不等于0相当已经登录过
				next();
				return
			}

			store.dispatch('GetInfo').then(() => {
				//获取数据之后，就要根据当前的roles来决定权限
				permission.init({
					roles: store.getters.roles,
					router: router.options.routes
		     		});
				next();
			}).catch(err => {
				console.log(err);
			});

		}
	}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	@import "src/styles/mixin.scss";

	.app-wrapper {
	    @include clearfix;
	    position: relative;
	    height: 100%;
	    width: 100%;
	    padding-left: 180px;
	    &.hideSidebar {
	        padding-left: 40px;
	        .sidebar-wrapper {
	            transform: translate(-140px, 0);
	            .sidebar-container {
	                transform: translate(132px, 0);
	            }
	            &:hover {
	                transform: translate(0, 0);
	                .sidebar-container {
	                    transform: translate(0, 0);
	                }
	            }
	        }
	    }
	    .sidebar-wrapper {
	        background: #abcdef;
	        width: 180px;
	        position: fixed;
	        top: 0;
	        bottom: 0;
	        left: 0;
	        z-index: 1001;
	        overflow-x: hidden;
	        transition: all .28s ease-out;
	        @include scrollBar;
	    }
	    .sidebar-container {
	        transition: all .28s ease-out;
	    }
	    .main-container {
	        width: 100%;
	        min-height: 100%;
	        transition: all .28s ease-out;
	    }
	}
</style>
