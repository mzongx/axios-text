<template>
	<div class="hello">
		<h1>{{ msg }}的年龄:{{ age }}</h1>
		<h2>Essential Links</h2>
		<button @click='fn()'>点击</button>
	</div>
</template>

<script>
	import Axios from 'axios'
	// import Mdata from '../../mock/mock.js';
	export default {
		name: 'hello',
		data () {
			return {
				msg: 'lisa',
				age: 18,
				user: ''
			}
		},
		created() {
			let _this = this;
			Axios.get("/getInviteList/")
				.then(function(rsp) {
					_this.user = rsp.data
				})

			// function timeout(ms) {
			// 	return new Promise((resolve, reject) => {
			// 		setTimeout(resolve, ms, 'done');
			// 	});
			// }

			// timeout(100).then((value) => {
			// 	console.log(value);
			// });

			// let promise = new Promise(function(resolve, reject) {
			// 	console.log('Promise');//Promise一创建就执行
			// 	resolve();
			// })

			// promise.then(function() {
			// 	console.log('Resolved.');
			// });

			// console.log('Hi!');

		},
		methods: {
			fn: function () {
				var _this = this;
				Axios.get("www.miao.com")//这种方式只能是get
				.then(function (rsp) {
					_this.msg = rsp.data.name
					_this.age = rsp.data.age
				}).catch(function(err) {
					console.log(err)
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}
</style>
