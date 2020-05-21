<template>
<div class="search">

<!-- <label for="search">Wyszukaj:</label><br> -->
  <div class="search__input-wrapper" style="z-index:5">

    <input 
    autocomplete="off" 
    class="search__input" 
    type="search" 
    id="search" 
    placeholder="Miasto" 
    v-model="search"
    style="background:white" />

    <button class="search__button" @click="searchResults()">Wyszukaj</button>
  </div>

  <!-- https://stackoverflow.com/questions/55306489/is-there-a-way-to-close-a-vue-component-by-clicking-outside-of-it -->

 <!-- <autocomplete v-show="searching>0"></autocomplete> -->
<div v-show="this.searching">
  <div class="autocomplete">
      <ul class="cities-list">
        <li class="cities-list__item">Warszawa, mazowieckie</li>
        <li class="cities-list__item">Kraków, małopolskie</li>
        <li class="cities-list__item">Gdańsk, pomorskie</li>
      </ul>
     
    </div>
     <div class="outside" @click="setSearchingFalse()"></div>
</div>
</div>
</template>

<style lang="scss" scoped>

.search {
  div {
    //position: relative;
  //width: 60%;
  //background:blue;
  }
  
  &__button {
    display: inline-block;
    margin-left: 10px;
  }

  &__input {
    //position: absolute;
    display: inline-block;
  }


}
input {
    border: 1px solid #e0e0e0;
    padding: 5px 10px;
    width: 60%;
}



.hidden {
  display: none;
}
.outside {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 0;
  cursor: pointer;
}

.autocomplete {
  height: auto;
  background: #ffffff;
  width: 60%;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  border-bottom: 1px solid grey;

  &__wrapper {
    height: 100vh;
    width: 100vw;
  }
}

.cities-list {
  list-style: none;
  z-index: 5;

  &__item {
    padding: 10px;
    transition: 0.3s;

    &:hover {
      background: lightblue;
      cursor: pointer;
    }
  }
}

</style>


<script>

//import Autocomplete from '@/components/Autocomplete.vue';

export default {

/*   components: {
    Autocomplete
    }, //components */
data() {
  
  return {
    search: '',
    searching: 0,
    page: 1,
    
  }
},
methods: {

  setSearching() {
    //event.preventDefault(e);
    this.searching = 1;  
  },

  setSearchingFalse() {
    this.searching = 0; 
  },


    


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


    const searchParameters = {city: this.$route.query.city, page: '1'}
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
      this.searching = 1;
      route.query = {
       
        city : this.search,
        page: '1'
      }
      route.path = 'search'
     

    } else {
       route.query = {
        city : "",
        page: '1'
      } 
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