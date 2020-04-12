<template>
<div>

<!-- <label for="search">Wyszukaj:</label><br> -->
  <input type="search" id="search" placeholder="Miasto" v-model="search" />
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

  }
}
    
}
</script>