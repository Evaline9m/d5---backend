<template lang="html">
  <div class="list-container">
    <div class="list page-loadmore-wrapper" v-if="!isShowloading" ref="wrapper">
      <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul>
          <router-link :to="{name: 'detail', params: { id: list.positionId}}" tag="li" v-for="(list, i) in dataList" :key="i">
          <!-- <li @click="gotoDetail(list.positionId)" v-for="(list, i) in dataList"> -->
            <dl>
              <dt>
                <img :src="'//static.lagou.com/' + list.companyLogo" alt="">
              </dt>
              <dd>
                <p>{{list.companyName}}</p>
                <p>{{list.positionName}}</p>
                <p>{{list.createTime}}</p>
              </dd>
              <dd>
              </dd>
            </dl>
          <!-- </li> -->
          </router-link>
        </ul>

        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
    </div>

    <div class="yo-loading yo-loading-a" v-if="isShowloading">
      <i class="yo-ico"></i>
      <div class="text">加载中...</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { Loadmore, Spinner } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore);
Vue.component(Spinner.name, Spinner);

export default {
  data() {
    return {
      dataList: [],
      isShowloading: true,
      allLoaded: false,

      bottomStatus: '',
      wrapperHeight: 0,

      topStatus: '',
      //wrapperHeight: 0,
      translate: 0,
      moveTranslate: 0
    }
  },
  methods: {
    gotoDetail(positionId) {
      this.$router.push({name: 'detail', params: { id: positionId}})
    },

    loadTop(){
      axios.get('/vip/list-refresh.php')
        .then((res)=>{
          const data = res.data.content.data.page.result
          this.dataList = data.concat(this.dataList)
          this.$refs.loadmore.onTopLoaded()
        })
    },

    handleBottomChange(status) {
      this.bottomStatus = status;
    },

    loadBottom() {
      axios.get('/vip/list-refresh.php')
        .then((res)=>{
          const data = res.data.content.data.page.result
          this.dataList = this.dataList.concat(data)
          this.$refs.loadmore.onBottomLoaded()
        })
    },

    handleTopChange(status) {
      this.moveTranslate = 1;
      this.topStatus = status;
    },

    translateChange(translate) {
      const translateNum = +translate;
      this.translate = translateNum.toFixed(2);
      this.moveTranslate = (1 + translateNum / 70).toFixed(2);
    }
  },
  mounted() {
    axios.get('/vip/list.php')
      .then((res)=>{
        const data = res.data.content.data.page.result
        this.dataList = data
        this.isShowloading = false
      })
  }
}
</script>

<style lang="css">
.loading-background, .mint-loadmore-top span {
    -webkit-transition: .2s linear;
    transition: .2s linear
}
.mint-loadmore-top span {
    display: inline-block;
    vertical-align: middle
}

.mint-loadmore-top span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.page-loadmore .mint-spinner {
    display: inline-block;
    vertical-align: middle
}

.page-loadmore-desc {
    text-align: center;
    color: #666;
    padding-bottom: 5px
}

.page-loadmore-desc:last-of-type,
.page-loadmore-listitem {
    border-bottom: 1px solid #eee
}

.page-loadmore-listitem {
    height: 50px;
    line-height: 50px;
    text-align: center
}

.page-loadmore-listitem:first-child {
    border-top: 1px solid #eee
}

.page-loadmore-wrapper {
    overflow: scroll
}

.mint-loadmore-bottom span {
    display: inline-block;
    -webkit-transition: .2s linear;
    transition: .2s linear;
    vertical-align: middle
}

.mint-loadmore-bottom span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}
</style>
