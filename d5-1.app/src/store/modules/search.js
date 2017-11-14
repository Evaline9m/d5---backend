import axiopro from '../../api/axiopro.js'
import * as types from './../mutation-types'

//存储内容
const state = {
	all:[]
}

//复用
const getters = {
	slist:(state) =>{
		//console.log(state)
		return state.all
		
	}
}

//解决异步 dispatch从组件发起提交给action
const actions = {
	searchList({commit}){

		return new Promise(function(resolve,reject){
			axiopro.getSearchList((list)=>{
				commit(types.RECEIVE_PRODUCTS,list)
				resolve("ok");
			})
		})
		

	}
}

// actions:{
//     "ADD" : function(store , param){
//         return new Promise(function(resolve, reject) {
//             store.commit('ADD',param)
//             resolve("ok");
//         })
//     }
// }



//修改state入口
const mutations = {
	[types.RECEIVE_PRODUCTS] (state,list){
		state.all = list
	}
}



export default{

	  state,
	  actions,
	  mutations,
	  getters

}