<template>
        <div class="individual">
            <h1>{{cases.type}}</h1>
            <h1> {{cases.description}}</h1>
            <h1> {{cases.cop_id}}</h1>
            <h1>{{cases.district_id}}</h1>
        </div>
</template>

<script>
export default {
    props: ['zootopiaCases'],
    computed: {
        cases: function() {
            return this.zootopiaCases.filter(cases => {
                let casesId = +this.$route.params.id
                return casesId === cases.id
            })[0]
        }
    }

    
}
</script>

<style scoped>
  
</style>
