<template>
  <div id="app">
    <img src="./assets/logo.png">
    <parent></parent>
    <hr>
    <out></out>
  </div>
</template>

<script>
import parent from './components/parent'
import out from './components/outter.vue'
export default {
  name: 'App',
  components:{
    parent,
    out
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
