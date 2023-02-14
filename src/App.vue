<template>
    <about-view></about-view>
    <router-link to="/" style="color:#FFFFFF">Sản Phẩm Có Sẵn</router-link>||||
    <router-link to="/customer" style="color:#FFFFFF">  Sản Phẩm Công Trình</router-link>

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
body{
  background-color: #1A1A1D;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: black;
}
@media only screen
and (min-device-width: 375px)
and (max-device-width: 812px)
and (-webkit-min-device-pixel-ratio: 3)
and (orientation: landscape) {

}
</style>
<script>
import AboutView from "@/views/AboutView";
export default {
  components: {AboutView}
}
</script>