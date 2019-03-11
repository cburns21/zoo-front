<template>
    <div class="cases">
        <h1>Ongoing Cases</h1>
        <div class="card-list">
        <individualCase 
        v-for='cases in zootopiaCases'
        v-bind:key="'cases' + cases.id"
        v-bind:cases='cases' />
        </div>
        <addCase />
  </div>
</template>


<script>
import individualCase from '../components/individualCase.vue'
import addCase from '../components/addCase.vue'
export default {
    components: {
    individualCase,
    addCase
  },
  props: ['zootopiaCases']
}
</script>


<style scoped>
     .card-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    font: navy;
    
  }
   h1 {
    padding-bottom: 100px;
  } 
  
</style>
