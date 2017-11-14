<template lang="html">
    <div class="confirm">
      <div class="black" v-if="isshow">
      	<div class="word">
      		<p>请输入密码</p>
      		<p>本次消费</p>
      		<p><i class="yo-ico">&#xe635;</i>{{this.$store.state.pay}}</p>
      		<span class="spanX" @click="close">X</span>
      		<input @keydown="password($event)"></input>
      		<div class="password">
	      		<div :class="{wrong:iswrong}" v-for="(item,i) in 6">
	      			<span v-if="show[i]">*</span>
	      		</div>
	      	</div>
	      	<span class="key" v-show=iswrong>支付密码不正确 , 请再次重新输入</span>
      	</div>
      	
      </div>
      
      <div class="head">
      	<div id='word'>
      		<div class="top">
      			<i class="yo-ico">&#xe769;</i>
      			<span id="name">刘佳倩</span>
      			<span id="tel">1501233456</span>
      		</div>
      		<div class="address">
      			北京市朝阳区东三环北路23号博瑞大厦B座
      		</div>
      	</div>
      	<img src="../../assets/confirm.png"/>
      </div>
      
      <list></list>
      
      <money></money>
      	
      <div class="remark">
      	<p>订单备注</p>
      	<textarea style="resize:none"  placeholder="请输入备注内容 (可不填)"></textarea>
      </div>
      
     <footer>
    	<div class="pay">
    		<span>应付金额</span>
    		<span><i class="yo-ico">&#xe635;</i>{{this.$store.state.pay}}</span>
    	</div>
    	<div class="btn" @click="black">
    		 去结算
    	</div>
    </footer>
      
    </div>
</template>

<script>
import list from './confirm-list.vue'
import money from './money.vue'
	
export default {
	 
  components: {
  	list,
	money,
  },
  data(){
	return{
		"isshow":false,
		"message": '',
		"iswrong" : false,
		"key":"0",
		"truekey" : 0 ,
		"show":[false,false,false,false,false,false]
	}
  },
  methods:{
  	black(){
  		this.isshow = true;
  	},
  	password(e){
  		this.show.splice(this.key,1,true);
  		this.key++;
  		this.iswrong = false;
  		if(e.keyCode == 49){
  			this.truekey++;
  		}
  		if(this.key == 6&&this.truekey == 6){
			this.$router.push('success');
			this.$store.state.all = [];
  		}else if(this.key == 6&&this.truekey != 6){
  			this.iswrong = "true",
			this.show = [false,false,false,false,false,false];
  			this.key = 0;
  		}
  	},
  	close(){
	  	this.isshow = false
	  }
  }
  
}
</script>
