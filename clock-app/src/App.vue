<template>
  <div id="app">
    <div class="tab">
      <router-link to="/">Tokyo</router-link> |
      <router-link to="/london_time">London</router-link> |
      <router-link to="/newyork_time">NewYork</router-link>
    </div>
    <div class="clock">
      <router-view />
      <!-- <Watch class="clock" /> -->
    </div>
  </div>
</template>

<script>
// import Watch from "@/views/Watch.vue"
// export default {
// components: {
// Watch,
// },
// }
</script>

<style scoped>
.clock {
  width: 80%;
  max-width: 500px;
  margin: 30px auto;
}
.tab {
  width: 40%;
  background-color: aqua;
  color: white;
  font-size: 35px;
}
</style>
