<template>
	<div class="dashboard-container">
		<!-- currentRole的用户权限admin与editor不同  -->
		<component v-bind:is="currentRole"> </component>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	import EditorDashboard from './editor/index'
	import DefaultDashboard from './default/index'
	export default {
		name: 'dashboard',
		components: {EditorDashboard, DefaultDashboard },
		data() {
			return {
				currentRole: 'EditorDashboard'
			}
		},
		computed: {
			...mapGetters([
				'roles'
			])
		},
		created() {
			this.roles.indexOf('admin') >= 0 ? '' : this.currentRole = 'DefaultDashboard'; 
		}
	}
</script>