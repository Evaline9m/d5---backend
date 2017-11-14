<template lang="html">
	<div class="login">
		 <header class="common-header">
			 <i class="yo-ico" @click="gotoIdex">&#xe779;</i>
			 <span>登录</span>
		</header>
		<div class="login-banner">
			<img src="/static/img/login-1.png"/>
		</div>
		<div class="login-form">
			<div class="login-input">
				<i class="yo-ico">&#xe788;</i>
				<input v-model="username" placeholder="请输入用户名">
			</div>
			<div class="login-input">
				<i class="yo-ico">&#xe6c2;</i>
				<input type="password" v-model="password" placeholder="请输入密码">
			</div>
			
		</div>
		<div class="login-submit">
				<span @click="togo">登录</span>
				<a href="javascript:;">忘记密码？</a>
			</div>
		<div class="login-footer">
			<p><span>注册</span></p>
			<p>客服电话：400-189-9138</p>
		</div>
	</div>
</template>

<script>
	//import Banner from './index/Banner';
	import { mapActions } from 'vuex'
	
export default {
	data() {
		return {
			username:"",
			password:""
		}
	},
	components: {
		
	},
	mounted() {
	},
	created() {
	},
	methods:{
		...mapActions({
   			userLogin: 'userLogin'
   		 }),
		togo(){
			/*this.$store.dispatch({
				type : 'userLogin',
				status : true
			})*/
			//this.$store.commit('USER_LOGIN',true);
			this.userLogin({status:true});
			this.$router.push('mine');
		},
		gotoIdex(){
			this.$router.push('/');
		}
	},
	computed:{
		 
	}
	
	
}
</script>

<style lang="scss">
	
</style>