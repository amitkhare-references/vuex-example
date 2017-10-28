<template>
  <div id="c-two">
  	<h2>Comp Two</h2>
  	<ul>
  		<li v-for="prod in saleProducts">
  			<span>{{prod.name}}</span> &nbsp;
  			<span>{{prod.price}}</span>
  		</li>
  	</ul>
  </div>
</template>

<script>

export default {
  computed: {
  	products(){
  		return this.$store.state.products;
  	},
  	saleProducts(){
  		return this.$store.getters.saleProducts;
  	}
  }
}
</script>

<style>

</style>
