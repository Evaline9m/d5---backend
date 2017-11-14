<template lang="html">
  <div class="search_list">
    <div class="list_header">
       <ul>
        <li>堂食点餐</li>
        <li class="active">外卖点餐</li>
       </ul>
    </div>
     <div class="list_con">
      <div class="con_left">
        <ul>
          <li v-for="(value,index) in $store.getters.slist" v-on:click="checkFirstTab(index,value.firstlist)" :class="{active:firstActive==index}">
            <p>{{value.name}}</p>
            
             <ul v-show="firstActive==index">
             <li v-for="(fvalue,findex) in $store.getters.slist.firstlist" v-on:click.stop="checkTab(fvalue,fvalue.sid,this.$store.getters.slist.firstlist,findex)" :class="{active:isActive==fvalue}">{{fvalue.fname}}</li>
             </ul>
          </li>
        </ul>
      </div>
      <div class="con_right">
        <ul v-for="detail in detaillist">
           <p>
             <b><i class="yo-ico" v-show="true">&#xe60b;</i>{{detail.fname}}</b>
             <!--<b><i class="yo-ico" v-show="detail.hot">&#xe60b;</i>{{detail.fname}}</b>-->
             <span>大家喜欢吃才叫真好吃</span>
           </p>
            <ul>
               <li v-for="detailcon of detail.secondlist[0].result">
                 <dl>
                   <dt><img :src="'../backend/upload/'+detailcon.companyLogo" alt=""></dt>
                   
                   <!--<dt><img :src="{{detailcon.companyLogo}}" alt=""></dt>-->
                   <dd>
                     <p>{{detailcon.name}}</p>
<!--                     <div class="givespan"><p v-show="detailcon.give"><span>赠</span><span>{{detailcon.give}}</span></p></div>
-->                     <p><span><i class="yo-ico">&#xe635;</i>{{detailcon.nprice}}</span><del>原价<i class="yo-ico">&#xe635;</i>{{detailcon.oprice}}</del></p>
                   </dd>
                   <dd v-on:click.stop.prevent="addCar(detailcon)"><i class="yo-ico">&#xe726;</i></dd>
                 </dl>
               </li>
            </ul>
         </ul> 
      </div>
     </div>
  </div>
</template>

<script>

import header from '../components/Header.vue'
import {mapGetters} from 'vuex'
/*import { Popup } from 'mint-ui'
Vue.component(Popup.name, Popup);*/

export default {
  data(){
   return {
       datalist:[], //全部内容
      detaillist:[], //分类详情
      isActive:"",
      firstActive:"",
      secondShow:false,
//    value:"",
      sid:"",
      pid:""
   }
  },
   methods:{
    //点击二级导航
    checkTab(name,sid,value,findex){
      this.isActive=name;
      this.sid=sid;
      this.value=value;
      let valuelength=0;      
      if(value[findex-1]){
          valuelength=value[findex-1].secondlist[0].result.length;
      }
     document.getElementsByClassName("con_right")[0].scrollTop=valuelength>0?parseInt(valuelength)*101+50:0
     
    },
    //点击一级导航
    checkFirstTab(name,value){
       this.detaillist=[];
       this.firstActive=name;
      if(value){  //如果存在子类执行显示子类 并给第一个元素添加active       
        this.secondShow=true;
        this.isActive =value[0];
      }
      this.detaillist=value
     document.getElementsByClassName("con_right")[0].scrollTop=0
    
   },
   //加入购物车
  /* addCar(pid){
        this.$store.dispatch('addToCart1',pid)
   }*/
  },
  computed:{
  
  },
  mounted() {
      //searchList 是action 函数名
 			this.$store.dispatch('searchList').then(function(res){
      this.detaillist = this.$store.getters.slist[0].firstlist;
 }.bind(this))
     
    this.$store.commit('changeIndex', 1)
     
   
  }
  
}
</script>
