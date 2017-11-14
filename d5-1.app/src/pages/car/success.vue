<template lang="html">
    <div class="cart-success">
        <div>
        	
        	<i class="yo-ico" id='first'>&#xe731;</i>
        	<p>支付成功</p>
        	<p><i class="yo-ico">&#xe74f;</i>我们会尽快帮您出餐,请耐心等候</p>
        	<p>实际支付</p>
        	<p><i class="yo-ico">&#xe635;</i>{{this.$store.state.pay}}</p>
        	
        </div>
        
        <div @click="btn">
        	继续购物
        </div>
    </div>
</template>

<script>
	
export default {
	 
  components: {
  	
  },
  created (){
      this.$emit('viewIn',"支付结果");
  },
  data(){
	return{
		
	}
  },
  methods:{
  	btn(){
  		this.$router.push('indexMain');
  	}
  }
}
</script>
