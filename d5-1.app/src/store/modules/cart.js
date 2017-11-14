import * as types from './../mutation-types'
import search from './search.js'
import commonJs from './../../lib/common'

const state={
	cartlist:[]
}

const getters={
	cartProducts:(state)=>{
		//console.log(state)
		const alllist=commonJs.foreachid(search.state.all)
	return state.cartlist.map(({id,quantity})=>{
		const product = alllist.find(p=>p.sid===id)
		return {
			product,
			quantity
		}
	})

	}
}


const actions ={
	addToCart({commit},detailcon){
		commit(types.ADD_TO_CART, detailcon)
	}
}

const mutations={
	[types.ADD_TO_CART](state,id){
		const record=state.cartlist.find(value=>value.sid===id)
		if(!record){
			state.cartlist.push({
				sid:id,
				quantity:1
			})
		}else{
			record.quantity++
		}
	}
}

export default {
	 state,
	  actions,
	  mutations,
	  getters
}
