<template lang="html">
	<div class="index-main">
		<!--     头部        -->
		<div class="index-header">
			<div class="index-header-site">
				<i class="yo-ico">&#xe769;</i><span>博瑞大厦B座</span>
			</div>
			<div class="index-header-search">
				<i class="yo-ico">&#xe752;</i><input type="text" />
			</div>
			<div class="index-header-glance yo-ico">
				&#xe749;
			</div>
		</div>
		<div class="content">	
			<!--banner-->
			<Banner />
			<!-- 分区导航 -->
			<AreaNav />
			<!--限时抢购-->
			<FlashSale />
			<!--推荐品牌-->
			<RecommendedBrand /> 
			<!--D5牛排-->
			<D5Steak />
			<!--真真小吃-->
			<ZhenZhenXiaoChi />
		</div>
		
	</div>
</template>

<script>
	import Banner from './index/Banner';
	import AreaNav from './index/AreaNav';
	import FlashSale from './index/FlashSale';
	import RecommendedBrand from './index/RecommendedBrand'
	import D5Steak from './index/D5Steak'
	import ZhenZhenXiaoChi from './index/ZhenZhenXiaoChi'
	
export default {
	data() {
		return {
			isIndex: this.$route.params.isIndex
		}
	},
	components: {
		Banner,
		AreaNav,
		FlashSale,
		RecommendedBrand,
		D5Steak,
		ZhenZhenXiaoChi
	},
	mounted() {
		this.$store.commit('changeIndex', 0)
	},
	created() {
		this.$emit('viewIn', "首页");
		}
	}
</script>

<style lang="scss">
	
</style>