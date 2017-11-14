<template lang="html">
	<div class="d5-steak">
		<div class="header">
			<h1 class="logo">
				<a href="">
					<img src="/static/img/zzxc.png" alt="" />
				</a>
			</h1>
			<div class="left">
				<p>真真小吃</p>
				<p>精挑细选肉质 美味新鲜两不误</p>
			</div>
		</div>
		<div class="middle">
			<img src="/static/img/zzxiaochi.png" />
		</div>

		<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" class="carousel">
			<swiper-slide>
				<dl>
					<dt>
					<img src="/static/img/np-1.png" />
				</dt>
					<dd>薄荷豪牛肉</dd>
					<dd>
						<em class="yo-ico">&#xe635;</em><span>98.00</span><em class="yo-ico">&#xe635;</em><i>98.00</i></dd>

				</dl>
			</swiper-slide>
			<swiper-slide>
				<dl>
					<dt>
					<img src="/static/img/np-2.png" />
				</dt>
					<dd>薄荷豪牛肉</dd>
					<dd>
						<em class="yo-ico">&#xe635;</em><span>98.00</span><em class="yo-ico">&#xe635;</em><i>98.00</i></dd>

				</dl>
			</swiper-slide>
			<swiper-slide>
				<dl>
					<dt>
					<img src="/static/img/np-2.png" />
				</dt>
					<dd>薄荷豪牛肉</dd>
					<dd>
						<em class="yo-ico">&#xe635;</em><span>98.00</span><em class="yo-ico">&#xe635;</em><i>98.00</i></dd>

				</dl>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
	import axios from 'axios'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	require('swiper/dist/css/swiper.css')
	export default {
		data() {
			return {
				notNextTick: true,
				swiperOption: {
					autoplay: 3000,
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
		.swiper-slide{
			width: 1.49rem;
		height: 1.67rem;
	}
</style>