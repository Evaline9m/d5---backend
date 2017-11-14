<template lang="html">
	<div class="area-nav">
		<ul>
			<li v-for="(list, i) in dataList1" :key="i">
				<img :src="'https://fuss10.elemecdn.com/'+ list.image_url " alt="" />
				<span>{{list.title}}</span>
			</li>
		</ul>
		<div class="youhui">
			<div class="left">
				<img src="/static/img/yhhd.png" />
			</div>
			<div class="right">
				<img src="/static/img/newpeple.png" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				base_image_url: 'https://fuss10.elemecdn.com/',
				dataList1: []
			}
		},
		methods: {

		},
		mounted() {
			axios.get('/ele/v2/index_entry?geohash=39.99287,116.31025&group_type=1&flags[]=F')
				.then((res) => {
					this.dataList1 = res.data.splice(0, 4);
				})
		}
	}
</script>

<style lang="css">

</style>