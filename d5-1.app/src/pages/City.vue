<template lang="html">
    <div id="fulldialog-conid-1" class="fdialog-content">
     <div class="fdialog-rcon">
      <!--通用城市组件模板@author pooky@lagou.com-->
      <template v-for="(city, i) in cities">
        <div class="cities-header">
          {{city.nameStr}}
        </div>
        <table class="cities-list">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="j in Math.ceil(city.cityList.length/3)" class="cities-list-item">
              <td @click="gotoSearchPage(city.cityList[3*(j-1) + (k-1)])" v-for="k in 3" class="activeable cities-item" :data-item="city.cityList[3*(j-1) + (k-1)]">{{city.cityList[3*(j-1)+(k-1)]}}</td>
            </tr>
          </tbody>
        </table>
      </template>

     </div>
    </div>
   </body>
  </html>
</template>

<script>
export default {
  data() {
    return {
      cities: [{"cityList":["北京","上海","广州","深圳","成都","杭州"],"name":"热门城市","nameStr":"热门城市"},{"cityList":["安庆","安阳","保定","北京","包头","长春","成都","重庆","长沙","常州","郴州","沧州","东莞","大连","东营","佛山","阜阳","福州","抚州"],"name":"","nameStr":"ABCDEF"},{"cityList":["桂林","贵阳","广州","赣州","邯郸","哈尔滨","合肥","呼和浩特","海口","衡水","河源","杭州","惠州","湖州","金华","九江","吉林","江门","济南","济宁","嘉兴","荆州"],"name":"","nameStr":"GHIJ"},{"cityList":["昆明","聊城","廊坊","丽水","拉萨","临沂","洛阳","连云港","兰州","柳州","泸州","马鞍山","茂名","绵阳","梅州","宁波","南昌","南京","南宁","南通","南阳"],"name":"","nameStr":"KLMN"},{"cityList":["平顶山","莆田","濮阳","青岛","秦皇岛","清远","泉州","衢州","日照"],"name":"","nameStr":"OPQR"},{"cityList":["上海","石家庄","汕头","汕尾","绍兴","沈阳","三亚","深圳","苏州","宿州","泰安","天津","唐山","太原","台州"],"name":"","nameStr":"STUV"},{"cityList":["潍坊","武汉","芜湖","威海","乌鲁木齐","无锡","温州","西安","孝感","香港特别行政区","厦门","西宁","新乡","咸阳","襄阳","徐州","宜宾","银川","盐城","宜昌","烟台","扬州","淄博","珠海","镇江","湛江","肇庆","中山","遵义","郑州","漳州","株洲"],"name":"","nameStr":"WXYZ"}]
    }
  },
  methods: {
    gotoSearchPage(cityName) {
      this.$router.push({name: 'search', query: {cityName: cityName}})
    }
  },
  mounted() {
    console.log(this.$store.state.tabIndex);
  }
}
</script>

<style lang="css" scoped>
#fulldialog-conid-1 {
  height: 100%;
  overflow: scroll;
}
.fdialog-container {
	display: none;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%
}

.fdialog-container .fdialog-header {
	height: 45px;
	line-height: 45px;
	background-color: #00b38a;
	color: #fff;
	font-size: 1.8rem;
	text-align: center;
	position: relative
}

.fdialog-container .fdialog-header .left {
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 40px
}

.fdialog-container .fdialog-header .left:active {
	background-color: #f0f0f0
}

.fdialog-container .fdialog-header .left .corner {
	width: 9px;
	height: 20px;
	margin: 13px auto 0 auto;
	background: url(/images/mobile/asset/common/img/icon2.png ) no-repeat -1.5px -20.5px;
	background-size: 250px 250px;
	display: inline-block
}

.fdialog-container .fdialog-header .right {
	position: absolute;
	right: 0;
	top: 0;
	height: 100%;
	width: 40px
}

.fdialog-container .fdialog-header .right:active {
	background-color: #f0f0f0
}

.fdialog-container .fdialog-header .right .corner {
	width: 17px;
	height: 20px;
	margin: 13px auto 0 auto;
	background: url(/images/mobile/asset/common/img/icon2.png ) no-repeat -60px -46.5px;
	background-size: 250px 250px;
	display: inline-block
}

.fdialog-container .fdialog-header .right-text {
	position: absolute;
	right: 15px;
	top: 0;
	height: 100%
}

.fdialog-container .fdialog-header .right-text .text {
	font-size: .14rem;
	color: #fff
}

.fdialog-container .fdialog-content {
	height: 100%;
	background-color: #fff;
	overflow: scroll;
	-webkit-overflow-scrolling: touch;
	-moz-overflow-scrolling: touch;
	overflow-scrolling: touch
}

.fdialog-container .fdialog-rcon {
	margin-bottom: 45px;
	padding-bottom: 45px
}

.cities-header {
	border-bottom: 1px solid #e8e8e8;
	height: 25px;
	line-height: 25px;
	padding: 0 15px;
	font-size: .12rem;
	color: #888
}

.selected {
	background-color: #e7f3f0
}

.cities-list {
	width: 100%;
	border-bottom: 1px solid #e8e8e8
}

.cities-item {
	height: 60px;
	line-height: 60px;
	text-align: center;
	font-size: .15rem;
	color: #333;
	min-width: 100px
}

.cities-item:active {
	background-color: #f0f0f0
}
</style>
