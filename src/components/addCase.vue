<template>
    <router-link :to="{ path: `buttonForm` }">
        <div>
            <button type="button" class="btn btn-primary btn-lg">Add a Case</button>
        </div>
    </router-link>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    button {
      margin-top: 50px;
      flex-grow: 1;
      flex-direction: column;
      background-color: navy;
  }
</style>
