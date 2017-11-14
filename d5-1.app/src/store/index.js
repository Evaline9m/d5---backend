import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import cart from './modules/cart.js'
import * as types from './mutation-types'
import axiopro from '../api/axiopro.js'


const store = new Vuex.Store({
	state: {
		tabIndex: 0,
		all: [],		//加入购物车的数组
		allList: [],	
		login: false,
		userinfo: {},
		price : 0,		// 总价
		select : true ,   //全选
		pay : 0,	//支付价格
	},
	modules: {
		cart
	},
	actions: {
		userLogin({
			commit
		}, {
			status
		}) {
			commit(types.USER_LOGIN, status)
		},
		addToCart1({
			commit
		}, detailcon) {
			commit(types.ADD_TO_CART, detailcon);
			this.commit('price');
		},
		searchList({commit}){
			return new Promise(function(resolve,reject){
				axiopro.getSearchList((list)=>{
					commit(types.RECEIVE_PRODUCTS,list)
					resolve("ok");
				})
			})
		}
	},
  mutations: {  
    addcart (state,{ amount }) {
      state.all.push( amount );
      this.state.num.push(1);
    },
    changeIndex(state, payload) {
      state.tabIndex = payload
    },
    [types.USER_LOGIN](state,status){
    	state.login = status;
    },
	 [types.ADD_TO_CART](state,detailcon){	    		
				var record=state.all.find(value=>{					
					return value.sid.pid === detailcon.pid
				});
				if(!record){
					state.all.push({
						sid:detailcon,
						quantity:1
					})
				}else{
					record.quantity++
				}
			},
	    [types.RECEIVE_PRODUCTS] (state,list){
			state.allList = list
		},//购物车加数量
		addNumber(state, index) {
			this.state.all[index].quantity++;
			this.commit('price')
		},
		//购物车减数量
		subNumber(state, index) {
			if(this.state.all[index].quantity == 1) {
				return;
			} else {
				this.state.all[index].quantity--;
			}
			this.commit('price')
		},
		//计算总价
		price(){
			this.state.price2 = 0;
	    	for(let i=0;i<this.state.all.length;i++){
    			if(this.state.all[i].checked){
    				let a = this.state.all[i].sid.nprice;
		    		let b = this.state.all[i].quantity;
		    		this.state.price2+=a*b;
		    		if(this.state.price2>=50){
		    			this.state.price=this.state.price2-5;
		    		}else{
		    			this.state.price=this.state.price2;
		    		}
		    		if(this.state.price2>=258){
		    			this.state.pay=this.state.price;
		    		}else{
		    			this.state.pay=this.state.price+4;
		    		}
    			}
	    	}

		}
	    
	},

	getters: {
		getLoginStatus(state) {
			return state.login
		},
		getUserInfo(state) {
			return state.userinfo
		},
		slist: (state) => {
			return state.allList
		},
	},

})
//return所有产品列表  参数all需要传入所有店铺列表

export default store