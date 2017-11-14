<template lang="html">
	<router-link to="/buyLimit" tag="div" class="flash-sale">
		<p>限时抢购</p>
		<p>距离本场结束<span>00:20:45</span></p>
		<!--<div class="carousel">-->
		<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" class="carousel">
			<swiper-slide>
				<dl>
					<dt>
					<img src="/static/img/qiangfengle.png"/>
				</dt>
					<dd>
						<img src="/static/img/flash-sale-image1.jpg" />
					</dd>
					<dd><span>￥98.00</span><i>￥98.00</i></dd>
					<dd>[海鲜姿色] 避风塘太子蟹</dd>
					<dd><span>立即抢购</span></dd>
				</dl>
			</swiper-slide>
			<swiper-slide>
				<dl>
					<dt>
				<img src="/static/img/qiangfengle.png"/>
				</dt>
					<dd>
						<img src="/static/img/flash-sale-image2.jpg" />
					</dd>
					<dd><span>￥98.00</span><i>￥98.00</i></dd>
					<dd>[海鲜姿色] 避风塘太子蟹</dd>
					<dd><span>立即抢购</span></dd>
				</dl>
			</swiper-slide>
			<swiper-slide>
				<dl>
					<dt>
				<img src="/static/img/qiangfengle.png"/>
				</dt>
					<dd>
						<img src="../../../static/img/flash-sale-image1.jpg" />
					</dd>
					<dd><span>￥98.00</span><i>￥98.00</i></dd>
					<dd>[海鲜姿色] 避风塘太子蟹</dd>
					<dd><span>立即抢购</span></dd>
				</dl>
			</swiper-slide>
		</swiper>
		<!--</div>-->

	</router-link>
	
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	require('swiper/dist/css/swiper.css')
	export default {
		data() {
			return {
				notNextTick: true,
				swiperOption: {
					//autoplay: 3000,
					speed: 300,
					loop: true,
					direction: 'horizontal',
					grabCursor: true,
					autoplayDisableOnInteraction: false,
					setWrapperSize: true,
					slidesPerView: "auto",
					mousewheelControl: true,
				}
			}
		},
		methods: {

		},
		mounted() {
			this.swiper.slideTo(3, 1000, false)
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		components: {
			swiper,
			swiperSlide
		}
	}
</script>

<style lang="css" scoped="scoped">
	.carousel {
		width: 100%;
	}
	
	.swiper-container {
		width: 100%;
		height: 100%;
	}
	
	.swiper-slide {
		width: 1.49rem;
		height: 2.66rem;
	}
</style>