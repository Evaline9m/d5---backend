<template lang="html">
	<div class="cart-tj">
		<div class="title">
			<div></div>
			<div>热门推荐</div>
			<div></div>
		</div>
		<ul class="tjList" v-if="data.length > 0">
			<li v-for="i in 2">
				<div class="img"><img :src="data[0].firstlist[i].secondlist[0].src" alt=""></div>
				<i class="like yo-ico" v-if="data[0].firstlist[i].secondlist[0].like" @click="changeShow(data[0].firstlist[i].secondlist[0])">&#xe60e;</i>
				<i class="like yo-ico" v-else @click="changeShow(data[0].firstlist[i].secondlist[0])">&#xe60c;</i>
				<div class="word">
					<div class="word-left">
						<p>{{data[0].firstlist[i].secondlist[0].sname}}</p>
						<p><i class="yo-ico">&#xe635;</i>{{data[0].firstlist[i].secondlist[0].nprice}}</p>
						<del>原价<span>{{data[0].firstlist[i].secondlist[0].oprice}}</span></del>
					</div>
					<div class="word-right">
						<i class="yo-ico" @click='addcart( data[0].firstlist[i].secondlist[0])'>&#xe60f;</i>
					</div>
				</div>
			</li>
		</ul>
	</div>

</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'

	export default {
		data() {
			return {
				data: []
			}
		},
		methods: {
			changeShow(item) {
				item.like = !item.like
			},
			addcart(_object) {
				this.$store.dispatch('addToCart1', _object)
			}

		},
		mounted() {
			axios.get('/vip/list.php')
				.then((res) => {
					this.data = res.data;
				})
		},
		updated() {

		},
	}
</script>






