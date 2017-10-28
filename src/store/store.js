import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
	state:{
		products:[
  			{name:"Laptop",price:10},
  			{name:"Computer",price:20},
  			{name:"Rice",price:30},
  			{name:"Tea",price:40}
  		]
	},
	getters:{
		saleProducts: state => {
			return state.products.map(product=>{
				return {
					name: `** ${product.name} **`,
					price: product.price/2
				}
			});
		}
	},
	mutations:{
		REDUCE_PRICE: (state, payload) => {
			return state.products.forEach(product =>{
				product.price -= payload;
			});
		}
	},
	actions:{
		reducePrice: (context, payload) =>{
			setTimeout(function(){
				context.commit("REDUCE_PRICE",payload);
			},3000);
		}
	}
});