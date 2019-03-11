<template>
  <div class="home">
    <img alt="Police" src="../assets/badge.png">
    <HelloWorld msg="Zootopia Police Department"/>
    <h3>Dedicated to serving all the animals of Zootopia</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .home {
    font-family: 'Amaranth', sans-serif;
  }
  
</style>
