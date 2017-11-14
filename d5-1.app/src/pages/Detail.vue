<template lang="html">
  <div class="detailtmp">
		<header class="common-header">
			 <i class="yo-ico">&#xe779;</i>
			 <span>详情</span>
		</header>
     <section class="detail_top">
     	<img :src="detailcon.src" alt="">
		<p>{{detailcon.sname}}</p>
		<p>1屉3个装</p>
		<p><span><i class="yo-ico">&#xe635;</i>{{detailcon.nprice}}</span><del>原价<i class="yo-ico">&#xe635;</i>{{detailcon.oprice}}</del></p>
     </section>
     <div class="detail_give">
     	<span>促销 &nbsp</span>
     	<div class="givespan" v-show="detailcon.give"><p><span>赠</span><span>{{detailcon.give}}</span></p> </div>
     	<span> &nbsp限时抢购，仅限一件</span>
     </div>
     <div class="shoptitle">
       <span><i class="yo-ico">&#xe736;</i>{{detailcon.storename}}</span><span><i class="yo-ico">&#xe797;</i>联系我们</span>
     </div>
     <div class="prochose">
       <span>已选: 小份</span>
       <i class="yo-ico">&#xe775;</i>
     </div>
     <p class="evaluate"> <i class="yo-ico">&#xe729; </i> <span>商品详情</span> <i class="yo-ico"> &#xe729;</i></p>
     <div class="detail">
       <img :src="detailcon.conpic" alt="">
     </div>
     <div class="buytip">
       <div>
          <p><i class="yo-ico">&#xe736;</i><span>店铺</span></p>
          <p @click="toggle" :class="{red:isLove}"><i class="yo-ico" >&#xe733;</i><span>收藏</span></p>
          <p></p>
          <p @click="addCar(detailcon)">加入购物车</p>
          <p @click="addCar(detailcon)">立即购买</p>
       </div>
     </div>
  </div>
</template>

<script>

import {foreachid} from './../lib/common'


export default {

  data() {
    return {
      id: this.$route.query.pid,
      detailcon:{},
      isLove:false
    }
  },
  methods:{
     addCar(pid){
      this.$store.dispatch('addToCart1',pid);
      this.$router.push({path:"/car"});
    },
    toggle(){  
            this.isLove=!this.isLove;  
        } 
  },
  mounted:function(){
     this.$store.dispatch('searchList').then(function(res){
      const detailpro = foreachid(this.$store.getters.slist)
     this.detailcon = detailpro.find(p=>p.pid==this.id)
   
    }.bind(this))    
  }
}
</script>

