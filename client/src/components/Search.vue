<template>
  <div class="search">

    <div
      class="search__input-wrapper"
    >
      <input
        id="search"
        autocomplete="off"
        class="search__input"
        type="search"
        placeholder="Miasto"
        style="width:220px"
        @keyup="loadCitiesFilteredLimited($event)"
        @click="setSearching()"
      >

      <!--  <button class="search__button" @click="searchResults()">Wyszukaj</button> -->
    </div>

    <div v-show="(this.searching)">
      <div class="autocomplete">
        <ul class="cities-list">
          <li
            v-for="(city, id) in cities"
            :key="id"
          >
            <button
              class="cities-list__item autocomplete_button"
              @click="autocompleteInput($event)"
            > 
            
              {{ city.name }}, {{ city.region }}
              <span class="cityid" style="display:none;">{{city.id}}</span>
            </button>
          </li>
        </ul>

        <div
          class="outside"
          @click="setSearchingFalse()"
        />
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

// import Autocomplete from '@/components/Autocomplete.vue';

export default {

  /*   components: {
    Autocomplete
    }, //components */
  data () {
    return {
      search: '',
      searching: 0,
      page: 1,
      typing: 0 
    }
  },
  computed: {
    currentPageNumber() {
      // return this.$router.query.page;
      return 1
    },
    cities() {
      return this.$store.getters.loadedCities
    }
  },
   /* watch: {
    search (value) {
      const route = {
        path: 'city'
      }

      if (this.search !== '') {
        this.searching = 1
        route.query = {
          city: this.search,
          page: '1'
        }
        route.path = 'search'
      } else {
        route.query = {
          city: '',
          page: '1'
        }
        route.path = 'search'
      }

      console.log(value)
      this.$router.push(route)
    },
    '$route.query.city': {
    // immediate:true,
      handler (value) {
        this.search = value
      } 
    } 
  }, */

  methods: {
    setSearching(){ // event.preventDefault(e);
      // this.searching = 1;
      document.getElementsByClassName('autocomplete')[0].classList.remove('hidden')
    },


    setSearchingFalse(){
      // this.searching = 0;
      document.getElementsByClassName('autocomplete')[0].classList.add('hidden')
    },



    async loadCities () {
      await this.$store.dispatch('loadCities')
        .catch(function (error) {
          console.log(error)
        })
      console.log(this.$store.getters.state.cities.citiesList)
    },


  //handler of a button with city name - ads cityid to url
    async autocompleteInput ($event) {
      const cityID = $event.target.childNodes[1].innerText;
      const cityName = $event.target.innerText;
      const searchInput = document.getElementById('search');


      console.log($event.target)
      console.log('')
      console.log('')
      console.log(cityID)
      console.log(cityName)

      searchInput.value = cityName;
      this.$router.push({ path: 'search', query: { city: cityID, page: 1}})
      window.location.reload();

     // await this.searchResults()
      document.getElementsByClassName('autocomplete')[0].classList.add('hidden')
    },


  //gets list of cities and shows it
    async loadCitiesFilteredLimited($event) {
      const name = document.getElementById('search').value;
      console.log(`name: ${name}`)

      await this.$store.dispatch('loadCitiesFilteredLimited', name)
        .catch(function (error) {
          console.log(error)
        })

      if ($event.target.value!=''){
        this.searching = 1 
      } else {
        this.searching = 0
      }
    },


    async searchByCity (search) {
      console.log(`search: ${search}`)

      await this.$store.dispatch('loadSearchResults', search)
        .catch(function (error) {
          console.log(error)
        })
      console.log(this.$store.getters.state)
      // this.$route.query.page = 1; potrzebne dodanie do urla /?page=1
    },



    async searchResults (search) {
      console.log(`search: ${search}`)
      const searchParameters = { city: this.search, page: '1' }
      console.log(`search page: ${this.searchParameters}`)

      await this.$store.dispatch('loadSearchResultsLimited', searchParameters)
        .catch(function (error) {
          console.log(error)
        })
      console.log(this.$store.getters.state)
    }
  }

}
</script>

 <style lang='scss'>
  .hidden {display: none;}
  .show {display: block;}
</style> 
