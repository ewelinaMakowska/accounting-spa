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
    console.log(value);
    const route = {
      name: 'city'
    }
    if(this.search !== '') {
      route.query = {
        city : this.search
      }
    }
    this.$router.push(route);

  }
}
    
}
</script>