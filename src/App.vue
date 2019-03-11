<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cops">Cop Profiles</router-link> |
      <router-link to="/districts">District Map</router-link> |
      <router-link to="/cases">Ongoing Cases</router-link> 
    </div>
    <router-view :zootopiaCops='zootopiaCops' :zootopiaCases='zootopiaCases'/>
    
  </div>
</template>


<script>
export default {
  data() {
    return {
      zootopiaCops: null,
      zootopiaCases: null
    }
  },
  methods: {
    getZootopiaCops() {
      fetch('http://localhost:3000/cops')
      .then(resp => resp.json())
      .then(resp => this.zootopiaCops = resp)
    },
    getZootopiaCases() {
      fetch('http://localhost:3000/cases')
      .then(resp => resp.json())
      .then(resp => this.zootopiaCases = resp)
    }
  },
  mounted() {
    this.getZootopiaCops()
    this.getZootopiaCases()
  }
}
</script>


<style>
#app {
  font-family: 'Amaranth', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: navy;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: navy;
}
</style>
