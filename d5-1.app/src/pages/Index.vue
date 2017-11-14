<template lang="html">
  <div class="m-index">
    <header v-if="!isIndex" class="common-header">
			 <i class="yo-ico" v-on:click="backwards">&#xe779;</i>
			 <span>{{title}}</span>
		</header>
    <section>
			<router-view v-on:viewIn='freshTitle'></router-view>
		</section>
    <footer>
      <ul class="footer-nav">
				<router-link to="/indexMain" tag="li" :class="{active: this.$store.state.tabIndex === 0}">
					<i class="yo-ico">&#xe751;</i>
					<b>首页</b>
				</router-link>
				<router-link to="/search" tag="li" :class="{active: this.$store.state.tabIndex === 1}">
					<i class="yo-ico">&#xe754;</i>
					<b>搜索</b>
				</router-link>
				<router-link to="/mine" tag="li" :class="{active: this.$store.state.tabIndex === 2}">
					<span class="AR-btn"><i class="yo-ico">&#xe7ad;</i></span>
				</router-link>
				<router-link to="/car" tag="li" :class="{active: this.$store.state.tabIndex === 3}">
					<i class="yo-ico">&#xe73d;</i>
					<b>购物车<span v-if="count>0">{{count}}</span></b>
				</router-link>
				<router-link to="/mine" tag="li" :class="{active: this.$store.state.tabIndex === 4}">
					<i class="yo-ico">&#xe75e;</i>
					<b>我的</b>
				</router-link>
			</ul>
    </footer>
  </div>
</template>

<script>
import '../assets/images/iconfont/iconfont.ttf'
import '../assets/images/iconfont/iconfont.woff'

import VueRouter from 'vue-router'

export default {
  data() {
    return {
      isIndex:true,
			title:"",
      tabIndex: 0
    }
  },
  methods: {
			backwards(){ //返回到上一页
				window.history.go(-1)
			},
			freshTitle(_title){ //更改页面标题
					this.title = _title;
			},
			checkIndex(){
				if( this.$route.path == '/indexMain' || this.$route.path == '/mine'){
					this.isIndex = true;
				}else{
					this.isIndex = false;
				}
			}
  },
  computed:{
  	count:function () {
			return this.$store.state.all.length>0?this.$store.state.all.length:0
  	}
  },
  mounted(){
			this.checkIndex();
			console.log("当前路由:"+this.$route.path);
			
		},

    watch: {
        "$route": "checkIndex" // 如果路由有变化，会再次执行该方法判断是否在首页
    },
  components: {

  }
}

</script>
