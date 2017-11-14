<template lang="html">
	<div class="m-index buyLimit">
		<header class="common-header buyLimit-header">
			<i class="yo-ico" v-on:click="backwards">&#xe779;</i>
			<span>限时抢购</span>
			<p>
				<a class="yo-ico" href="javascript:;">&#xe6a6;</a>
				<a class="yo-ico" href="javascript:;">&#xe73d;</a>
			</p>
		</header>
		<section class="limit-section">
			
			<div class="list-container">
					<!--banner-->
			<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" class="buyLimit-banner">
				<swiper-slide class="banner-items">
					<img src="/static/img/buylimit-1.png" />
				</swiper-slide>
				<swiper-slide class="banner-items">
					<img src="/static/img/buylimit-1.png" />
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			<!--限时秒杀-->
			<div class="limit-time">
				<p><i class="yo-ico">&#xe61c;</i><span>限时秒杀</span></p>
				<p>
					<span>距秒杀结束还有：</span><span><i>02</i>:<i>43</i>:<i>20</i>:<i>15</i></span>
				</p>
			</div>
				
			<!--底部滑动-->
				<div class="list page-loadmore-wrapper" v-if="!isShowloading" ref="wrapper">
					<mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
						<ul>
								<li v-for="(list, i) in dataList" :key=i>
           			<dl>
		              <dt>
		                <img :src="list.img" alt="">
		              </dt>
		              <dd>
		                <p>{{list.name}}</p>
		                <p>{{list.gg}}</p>
		                <p><i>￥68</i><span>省：￥<em>30</em></span></p>
		                <p><a href="javascript:;">立即抢购</a></p>
		              </dd>
           </dl>
          </li>
						</ul>

						<div slot="bottom" class="mint-loadmore-bottom">
							<span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
							<span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
						</div>
					</mt-loadmore>
				</div>

				<div class="yo-loading yo-loading-a" v-if="isShowloading">
					<i class="yo-ico"></i>
					<div class="text">加载中...</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	require('swiper/dist/css/swiper.css')

	import Vue from 'vue'
	import { Loadmore, Spinner } from 'mint-ui'
	Vue.component(Loadmore.name, Loadmore);
	Vue.component(Spinner.name, Spinner);

	import axios from 'axios'
	
	export default {
		data() {
			return {
				dataList:[],
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
					pagination: '.swiper-pagination',
				},
				
				isShowloading: false,
      	allLoaded: false,

				bottomStatus: '',
				wrapperHeight: 0,

				topStatus: '',
				//wrapperHeight: 0,
				translate: 0,
				moveTranslate: 0
			}
		},
		methods: {
			backwards() { //返回到上一页
				window.history.go(-1)
			},

			loadTop() {
				// axios.get('/vip/list-refresh.php')
				//   .then((res)=>{
				//     const data = res.data.content.data.page.result
				//     this.dataList = data.concat(this.dataList)
				//     this.$refs.loadmore.onTopLoaded()
				//   })
				setTimeout(function(){
					this.$refs.loadmore.onTopLoaded()
				}.bind(this),1000);
			},

			handleBottomChange(status) {
				this.bottomStatus = status;
			},

			loadBottom() {
				 axios.get('/vip/buyLimit.php')
				   .then((res)=>{
				     const data = res.data;
				     this.dataList = this.dataList.concat(data)
				     this.$refs.loadmore.onBottomLoaded()
				   })
			},

			handleTopChange(status) {
				this.moveTranslate = 1;
				this.topStatus = status;
			},

			translateChange(translate) {
				const translateNum = +translate;
				this.translate = translateNum.toFixed(2);
				this.moveTranslate = (1 + translateNum / 70).toFixed(2);
			}

		},
		computed: {

			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		mounted() {
			this.swiper.slideTo(3, 1000, false)
			console.log("当前路由:" + this.$route.path);
			
			 axios.get('/vip/buyLimit.php')
				   .then((res)=>{
				     const data = res.data;
				     this.dataList = data;
				     console.log(this.dataList)
				   })
		},

		watch: {

		},
		components: {
			swiper,
			swiperSlide
		}
	}
</script>

<style lang="css" scoped="scoped">
	.buyLimit-banner {}
	
	.swiper-container {
		width: 100%;
		height: 2.3rem;
		overflow: hidden;
	}
	
	.swiper-slide {
		width: 1.49rem;
		height: 2.66rem;
		margin: 0 0 0 .1rem;
	}
	
	.swiper-pagination-bullet-active {
		opacity: 1;
		background: #deb075 !important;
	}
	
	.swiper-pagination-bullet {
		width: 8px;
		height: 8px;
		display: inline-block;
		border-radius: 100%;
		background: #a0a4a5 !important;
		opacity: 1 !important;
	}
	
	.loading-background,
	.mint-loadmore-top span {
		-webkit-transition: .2s linear;
		transition: .2s linear
	}
	
	.mint-loadmore-top span {
		display: inline-block;
		vertical-align: middle
	}
	
	.mint-loadmore-top span.is-rotate {
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg)
	}
	
	.page-loadmore .mint-spinner {
		display: inline-block;
		vertical-align: middle
	}
	
	.page-loadmore-desc {
		text-align: center;
		color: #666;
		padding-bottom: 5px
	}
	
	.page-loadmore-desc:last-of-type,
	.page-loadmore-listitem {
		border-bottom: 1px solid #eee
	}
	
	.page-loadmore-listitem {
		height: 50px;
		line-height: 50px;
		text-align: center
	}
	
	.page-loadmore-listitem:first-child {
		border-top: 1px solid #eee
	}
	
	.page-loadmore-wrapper {
		height: 100%;
		overflow: scroll
	}
	
	.mint-loadmore-bottom span {
		display: inline-block;
		-webkit-transition: .2s linear;
		transition: .2s linear;
		vertical-align: middle
	}
	
	.mint-loadmore-bottom span.is-rotate {
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg)
	}
</style>