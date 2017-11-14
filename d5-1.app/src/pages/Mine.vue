<template lang="html">
  <div class="mine">
    <div class="mine-header">
    	<div class="set">
    		<i class="yo-ico">&#xe609;</i>
    	</div>
    	<div class="head-sculpture">
    		<img src="/static/img/mine-2.png"/>
    	</div>
    	<div class="nick-name">
    		<p><i>LV.2</i><span>刘佳婧</span></p>
    	</div>
    </div>
  	<div class="info">
  		<p>
  			<span><i class="yo-ico">&#xe635;</i><i>200</i></span>
  			<span>我的钱包</span>
  		</p>
  		<p>
  			<span class="yo-ico">&#xe7ad;</span>
  		</p>
  		<p>
  			<span>20</span>
  			<span>我的积分</span>
  		</p>
  	</div>
  	<div class="shop-info">
  		<p><i class="yo-ico">&#xe785;</i><span>待付款</span></p>
  		<p><i class="yo-ico">&#xe75f;</i><span>配送中</span></p>
  		<p><i class="yo-ico">&#xe744;</i><span>待评价</span></p>
  		<p><i class="yo-ico">&#xe7ba;</i><span>全部</span></p>
  	</div>
 		<div class="member">
 			<div class="member-content">
 				<p><i class="yo-ico">&#xe654;</i><span>会员特权</span></p>
 				<p><i><span>点击查看特权</span></i></p>
 			</div>
 		</div>
 		<div class="application">
 			<div class="application-row">
 				<div class="application-col">
 					<p><i>积分商城</i><span class="yo-ico">&#xe735;</span></p>
 					<p><i>优惠券</i><span class="yo-ico">&#xe764;</span></p>
 					<p><i>消费记录</i><span class="yo-ico">&#xe737;</span></p>
 				</div>
 				<div class="application-col">
 					<p><i>我的收藏</i><span class="yo-ico">&#xe732;</span></p>
 					<p><i>地址信息</i><span class="yo-ico">&#xe768;</span></p>
 					<p><i>我的消息</i><span class="yo-ico">&#xe762;</span></p>
 				</div>
 			</div>
 			<div class="footer"></div>
 		</div>
  </div>
</template>

<script>
	import { mapGetters } from 'vuex'
	
export default {
  components: {
  	
  },
  mounted() {
    this.$store.commit('changeIndex', 4)
    if(!this.getLoginStatus){
    	this.$router.push('login');
    }
  },
  computed: {
    ...mapGetters({
      getLoginStatus: 'getLoginStatus',
      getUserInfo :'getUserInfo'
    })
  },
	created (){
      this.$emit('viewIn',"我的");
     
  }
}
</script>
<style lang="css" scoped="scoped">
	.m-index section{
		background: #efefef;
	}
</style>
