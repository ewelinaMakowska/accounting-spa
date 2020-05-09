<template>
<div>

<!-- <label for="search">Wyszukaj:</label><br> -->
  <input type="search" id="search" placeholder="Miasto" v-model="search" /><br/>
  <button v-if="search" @click="searchResults(search)">Wyszukaj</button>
  <autocomplete></autocomplete>
</div>
</template>

<style scoped>
input {
    border: 1px solid #e0e0e0;
    padding: 5px 10px;
    width: 60%;
}
</style>


<script>

import Autocomplete from '@/components/Autocomplete.vue';

export default {
  components: {
    Autocomplete
    }, //components
data() {
  
  return {
    search: '',
    page: 1
    
  }
},
methods: {

 async searchByCity(search) {

 /*   try {
  this.$router.push({ page: 2 })
  console.log('ok!')
    } catch(err) {
      console.log(`Router error: ${err}` );
    }
 */
    console.log(`search: ${search}`)
   
    await this.$store.dispatch('loadSearchResults', search)
    .catch(function (error) {
          console.log(error);
      })
    console.log(this.$store.getters.state)
    //this.$route.query.page = 1; potrzebne dodanie do urla /?page=1
    
  },

  computed: {
    currentPageNumber() {
      //return this.$router.query.page;
      return 1;
    }
  },
   async searchResults(search) {
    //  const page = this.$router.page;
    console.log(`search: ${search}`)

    //const page = this.currentPageNumber;


    const searchParameters = {city: search, page: 1}

    console.log(`search page: ${this.searchParameters}`)

    await this.$store.dispatch('loadSearchResultsLimited', searchParameters)
    .catch(function (error) {
          console.log(error);
      })
    console.log(this.$store.getters.state)
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
      route.path = 'search'
    } else {
      /*  route.query = {
        city : ""
      } */
      route.path = 'search'
    }

    console.log(value);
    //this.route.query = route
    this.$router.push(route);
    //this.$router.push(route);
  },
  '$route.query.city': {
    //immediate:true,
    handler (value) {
      this.search = value
    }
  }
}
    
}
</script>