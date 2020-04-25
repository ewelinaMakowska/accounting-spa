<template>
<div>

<!-- <label for="search">Wyszukaj:</label><br> -->
  <input type="search" id="search" placeholder="Miasto" v-model="search" /><br/>
  <button @click="searchByCity(search)">Wyszukaj</button>
</div>
</template>

<style scoped>
input {
    border: 1px solid #e0e0e0;
    padding: 5px 10px;
}
</style>

<script>
export default {
data() {
  return {
    search: '',
  }
},
methods: {

 async searchByCity(search) {

    console.log(`search: ${search}`)
    await this.$store.dispatch('loadSearchResults', search)
    .catch(function (error) {
          console.log(error);
      })
   
  }
},
watch: {
  search(value) {
    
    const route = {
      path: 'city'
    }
    if(this.search !== '') {
      route.query = {
        city : this.search
      }
    }

    console.log(value);
    this.$router.push(route);
  },
  '$route.query.city': {
    immediate:true,
    handler (value) {
      this.search = value
    }
  }
}
    
}
</script>