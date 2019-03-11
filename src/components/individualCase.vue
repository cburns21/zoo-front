<template>
    <router-link :to="{ path: `Individual/${cases.id}` }">
        <div>
            <div class="card" id="cards" style="width: 18rem;">
                <h1> {{cases.type}}</h1> 
            </div>
        </div>
    </router-link>
</template>


<script>
export default {
    props: ['cases']
}
</script>


<style scoped>
   
</style>
