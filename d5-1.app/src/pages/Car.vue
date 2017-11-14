<template lang="html">
  <div class="cart">
    <list ischeck='true'></list>
		<tj></tj>
    <footer>
			<div v-if='!this.$store.state.select' class="check uncheck" @click='check'><i class="yo-ico">&#xe72f;</i><span>全选</span></div>
	  	<div v-else class="check" @click='check'><i class="yo-ico">&#xe730;</i><span>全选</span></div>		<!--选中-->
    	<div class="pay">
    		<span>共计</span>
    		<span><i class="yo-ico">&#xe635;</i>{{this.$store.state.price}}</span>
    		<span v-if='this.$store.state.price>=50'>立减<i class="yo-ico">&#xe635;</i></span>
    		<span v-if='this.$store.state.price>=50'>5</span>
    	</div>
    	<div class="btn" @click="confirm">
    		 去结算
    	</div>
    </footer>
  </div>
</template>  

<script>
import list from './car/Car-list.vue'
import tj from './car/Car-tj.vue'
export default {
  components: {
  	list,
  	tj,
  },
	created (){
      this.$emit('viewIn',"购物车");
  },
	data(){
		return {
			
    }
	},
	methods: {
    // 全选
    check(){		
    	this.$store.state.select = !this.$store.state.select;
    	for(let i=0;i<this.$store.state.all.length;i++){
    		this.$store.state.all[i].checked = this.$store.state.select;
    	}
    	this.$store.commit('price')
    },
    confirm(){
    	this.$router.push('confirm');
    }
 },
  mounted() {
		this.$store.commit('changeIndex', 3)
		this.$store.state.tabIndex === 3
	}
}
</script>