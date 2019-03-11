<template>
    
    <div>
        <div class="card" id="cards" style="width: 18rem;">
            <img class="rounded-circle" v-bind:src=cop.picture>
            <h1>Officer {{cop.f_name}} {{cop.l_name}}</h1> 
        </div>
    </div>

</template>


<script>
export default {
    props: ['cop']
}
</script>


<style scoped>
  img {
      height: 6cm;
      width: 6cm;
      margin-top: 5px;
      align-self: center;
  }

  #cards  {
      background-color: #60739B;
      justify-content: space-around;
      margin-bottom: 10px;
  }
   
</style>
