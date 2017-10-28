<template>
  <div id="c-one">
  	<h2>Comp 1</h2>
  	<ul>
  		<li v-for="prod in saleProducts">
  			<span>{{prod.name}}</span> &nbsp;
  			<span>{{prod.price}}</span>
  		</li>
  	</ul>
  	<button @click="reducePrice(4)">Redeuce Prices</button>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex';
export default {
  computed: {
  	...mapState([
  		'products'
  	]),
  	...mapGetters([
  		'saleProducts'
  	])
  },
  methods:{
  	...mapActions([
  		'reducePrice'
  	])
  }
}
</script>

<style>

</style>
