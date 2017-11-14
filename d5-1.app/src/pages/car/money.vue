<template lang="html">
	<div class="money">
		<div class="top">
			<p>
				<span>商品金额</span>
				<span><i class="yo-ico">&#xe635;</i>{{this.$store.state.price2}}</span>
			</p>
			<p>
				<span>运费</span>
				<span v-if="this.$store.state.price<=258"><i class="yo-ico">&#xe635;</i>4</span>
				<span v-else=""><i class="yo-ico">&#xe635;</i>0</span>
			</p>
		</div>
		<div class="bottom">
			<div>
				<span><i class="yo-ico">&#xe635;</i>立减优惠</span>
				<span id='red' v-if='this.$store.state.price>=50'>-<i class="yo-ico">&#xe635;</i>5</span>
				<span v-else><i class="yo-ico">&#xe635;</i>0</span>
			</div>
			<div>
				<p>
					<span>订单</span>
					<span><i class="yo-ico">&#xe635;</i>{{this.$store.state.price2}}</span>
					<span>优惠</span>
					<span v-if='this.$store.state.price>=50'><i class="yo-ico">&#xe635;</i>5</span>
					<span v-else>0</span>
				</p>
				
				<span>待支付<i class="yo-ico">&#xe635;</i>{{this.$store.state.pay}}</span>
			</div>			
		</div>
	</div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'

export default {
  data() {
    return {
    	
    }
  },
  methods: {
	   
    },
}
</script>

