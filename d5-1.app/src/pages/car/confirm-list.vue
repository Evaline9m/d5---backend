<template lang="html">
	<div class="cart-list">
	  <dl>
	  	<dt>
	  		<div v-if='!this.$store.state.select' class="check uncheck" @click='check'><i class="yo-ico">&#xe72f;</i></div>
	  		<div v-else class="check" @click='check'><i class="yo-ico">&#xe730;</i></div>	
	  		<div class="center">
	  			<p><i class="yo-ico">&#xe75f;</i>真真小吃外卖</p>
	  			<p>满258免配送费</p>
	  		</div>
	  		<div class="right" v-if='this.$store.state.price<=258'>未达到配送金额</div>
	  		<div class="right" v-else>免配送费</div>
	  	</dt>
	  	<dd>
	  		<div class="title">
	  			<span>第二件半价</span>
	  			<span>购买两件,其中一件半价优惠</span>
	  		</div>
	  		<div class="content" v-for="(item , index) in this.$store.state.all">
		  		<div v-if='!item.checked' class="check uncheck" @click='checked(item)'><i class="yo-ico">&#xe72f;</i></div>
	  			<div v-else class="check" @click='checked(item)'><i class="yo-ico">&#xe730;</i></div>
		  		<div class="center">
		  			<div class="img"><img :src="item.sid.src" alt=""></div>  
		  			<div class="word">
		  				<div class="name">{{item.sid.sname}}</div>
		  				<div class="size"><span>规格:</span><span>大份</span></div>
		  				<span id='confirmNum'>数量 : {{item.quantity}}</span>
		  				
		  			</div>
		  		</div>
		  		<div class='right confirmright'>
		  			<div class="price">
	  					<i class="yo-ico">&#xe635;</i>
	  					<span>{{item.sid.nprice}}</span>
	  					<del>原价<i class="yo-ico">&#xe635;</i><span>{{item.sid.oprice}}</span></del>
	  				</div>
		  		</div>
	  		</div>
	  	</dd>
 	  </dl>
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
	    sub(item){
			this.$store.commit("subNumber", item)
	    },
	    add(item){
			this.$store.commit("addNumber", item);
	    },
	    // 全选
	    check(){		
	    	this.$store.state.select = !this.$store.state.select;
	    	//改变每一个产品的选择状态
	    	for(let i=0;i<this.$store.state.all.length;i++){
	    		this.$store.state.all[i].checked = this.$store.state.select
	    	}
	    	//重新计算价格
	    	this.$store.commit('price')
	    },
	    //  单选
	    checked(item){
			item.checked =!	item.checked;
			//如果全部选择或者全部不选 , 改变全选按钮的状态
			let a =0;
			for(let i=0;i<this.$store.state.all.length;i++){
				if(this.$store.state.all[i].checked == item.checked){
					a++;
				}
				if(a == this.$store.state.all.length){
					this.$store.state.select = item.checked;
				}
	    	}
			this.$store.commit('price')
	    }
    },
    updated() {
    	this.$store.state.num = this.num
    },
    mounted() {
    	this.num = this.$store.state.num
    },
	props:['ischeck']
}
</script>

