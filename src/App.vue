<template>
  <div id="time" style="font-size: 1.25em; margin-left: 96%; margin-top: -3%; position: absolute"></div>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
document.title='CRM "Вектор"'
let time = setInterval(function () {
  let date = new Date();
  document.getElementById('time').innerHTML = (date.getHours() + ':' + date.getMinutes())}, 1000
)
time.toString()
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
