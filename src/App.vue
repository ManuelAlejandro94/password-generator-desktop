<template>
  <router-view></router-view>
</template>
<script>
export default{
  name: 'App'
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

.back-row {
    background-color: rgb(25, 25, 112);
}

a {
    text-decoration: none;
    color: inherit;
}

a:hover {
    color: rgb(150, 150, 150);
}
</style>
