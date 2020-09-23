<template>

<div class="search">
<br>
<br>
<br>
<!-- <label for="search">Wyszukaj:</label><br> -->


  <div class="search__input-wrapper" style="z-index:5; margin-top: -31px; background: white; position:absolute;">

    <input 
      autocomplete="off" 
      class="search__input" 
      type="search" 
      id="search" 
      placeholder="Miasto" 
      v-model="search"
      style="width:220px"
      v-on:keyup="loadCitiesFilteredLimited()"
      @click="setSearching()" />

  <!--  <button class="search__button" @click="searchResults()">Wyszukaj</button> -->
  </div>

 <!-- <autocomplete v-show="searching>0"></autocomplete> -->
<div v-show="(this.searching && this.search !=='')">

  <div class="autocomplete">
      <ul class="cities-list">
       <!--  <li class="cities-list__item">Warszawa, mazowieckie</li>
        <li class="cities-list__item">Kraków, małopolskie</li>
        <li class="cities-list__item">Gdańsk, pomorskie</li> -->

     <!--  {{ this.$store.getters.state.cities.citiesList }} -->

     <!-- <li v-for="(city, id) in cities" :key='id' class="cities-list__item">{{ city.name }}, {{ city.region }}</li> -->

      <li v-for="(city, id) in cities" :key='id' >
        <button class="cities-list__item autocomplete_button" @click="autocompleteInput($event)" >
          {{ city.name }}, {{ city.region }}
        </button>
      </li>
      
      </ul>
     
    
     <div class="outside" @click="setSearchingFalse()"></div>
  </div> <!--div autocomplete -->
  </div> <!--div v-shwo -->
      <!-- <button @click="loadCities()" >Get Cities</button> -->
<!-- sortowanie -->
</div> <!--search-->

</template>

<!-- <style lang="scss" scoped>

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
  width: 220px;
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
    z-index: 1;
    width: 220px;
    display: block;
    position: absolute;
    background: white;
    border-bottom: 1px solid grey;
    border-left: 1px solid grey;
    border-right: 1px solid grey;

  &__item {
    padding: 10px;
    transition: 0.3s;
    width: 100%;

    &:hover {
      background: lightblue;
      cursor: pointer;
    }
  }
}

</style> -->


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
computed: {
    currentPageNumber() {
      //return this.$router.query.page;
      return 1;
    },
     cities () {
      return this.$store.getters.loadedCities;
      }    
  },
methods: {

  setSearching() {   //event.preventDefault(e);
   // this.searching = 1;  
    document.getElementsByClassName('autocomplete')[0].classList.remove('hidden');
  },

  setSearchingFalse() {
   // this.searching = 0; 
   document.getElementsByClassName('autocomplete')[0].classList.add('hidden');
  
  },

  async loadCities() {
     await this.$store.dispatch('loadCities')
    .catch(function (error) {
          console.log(error);
      })
    console.log(this.$store.getters.state.cities.citiesList)
  },

  async autocompleteInput($event) {
    const text = $event.target.innerText;
    const searchInput = document.getElementById('search');

    searchInput.value = text;

    const city = text.split(',')[0];
   // const region = text.split(',')[2]

    this.search = city;
    await this.searchResults(); 
    //document.getElementsByClassName('outside')[0].classList.add('hidden');
    //this.setSearchingFalse();
    document.getElementsByClassName('autocomplete')[0].classList.add('hidden')
    //this.$route.query.city = text;
  
  
  },
  


  async loadCitiesFilteredLimited() {

    const name = this.$route.query.city;
   // const name ='W';
    console.log(`name: ${name}`)

    await this.$store.dispatch('loadCitiesFilteredLimited', name)
    .catch(function (error) {
          console.log(error);
      })
    //console.log(this.$store.getters.state)


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

   async searchResults(search) {
    //  const page = this.$router.page;
    console.log(`search: ${search}`)

    //const page = this.currentPageNumber;


   // const searchParameters = {city: this.$route.query.city, page: '1'}
   const searchParameters = {city: this.search, page: '1'}
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

<!-- <style>
.hidden {display: none;}
.show {display: block;}
</style> -->