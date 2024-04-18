<template>
  <HomeCmp />
</template>
<script>
import HomeCmp from './components/pages/HomeCmp.vue'

export default{
  name: 'App',
  components: {
    HomeCmp
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(192, 192, 192);
  margin-top: 60px;
  background-color: black;
}

body{
  background-color: black;
}
</style>
