<template>
  <div id="app">
  	<c-one></c-one>
  	<hr>
  	<c-two></c-two>
    <!--<router-view/>-->
  </div>
</template>

<script>
import COne from './components/COne.vue';
import CTwo from './components/CTwo.vue';

export default {
  name: 'app',
  components:{
  	'c-one':COne,
  	'c-two':CTwo
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
