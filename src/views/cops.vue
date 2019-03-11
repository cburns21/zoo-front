<template>
  <div class="cops">
    <h1>Meet the Squad</h1>
    <div class="card-list">
      <IndividualCop 
        v-for='cop in zootopiaCops'
        v-bind:key="'cop' + cop.id"
        v-bind:cop='cop'/>
    </div>
  </div>
</template>


<script>
import IndividualCop from '../components/IndividualCop.vue'
export default {
  components: {
    IndividualCop
  },
  props: ['zootopiaCops']
}
</script>


<style scoped>
  .card-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    
  }

  h1 {
    padding-bottom: 20px;
  }  
</style>
