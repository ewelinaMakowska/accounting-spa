<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1>Wyszukaj firmy:</h1>

            <form @submit="submitForm($event)">
              <input type="search" id="search-id-name-input" v-model.trim="searchValue" autocomplete="off" />
              <input
                type="submit"
                value="Szukaj"               
              >
            </form>

          </div>
        </div>
      </div>
    </section>

    <section v-if="loaded">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h2>Znalezione firmy:</h2>
<!-- 
            <div class="companies-list">
              <div class="companies-list__company">
                <div class="companies-list__id">
                  1
                </div>

                <div class="companies-list__name">
                  Nazwa firmy
                </div>

                <div class="companies-list__location">
                  Warszawa, mazowieckie
                </div>

                <div class="companies-list__buttons">
                  <button>Profil</button>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>


              <div class="companies-list__company">
                <div class="companies-list__id">
                  2
                </div>

                <div class="companies-list__name">
                  Nazwa innej firmy
                </div>

                <div class="companies-list__location">
                  Kraków, małopolskie
                </div>

                <div class="companies-list__buttons">
                  <button>Profil</button>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>

            </div> <!- companies-list --> 


            <div class="companies-list">

              <div v-for="(office, id) in offices" :key="id" class="companies-list__company">
                <div class="companies-list__id">
                  {{office.id}}
                </div>

                <div class="companies-list__name">
                  {{office.name}}
                </div>

                <div class="companies-list__location">
                  {{office.City}}
                </div>

                <div class="companies-list__buttons">
                  <router-link :to="'/office/' + office.id">Profil</router-link>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>


            </div> 

    
                  
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>

export default {
  data () {
    return {
      searchValue: null,
      loaded: false
    }
  }, // data
  methods: {
    loadSearchResultsSimple(searchParameters) {
      return this.$store.dispatch('loadSearchResultsSimple', searchParameters)
    },

    async submitForm($event) {
      $event.preventDefault();
      const searchValue = this.searchValue;
      var page = 1;

      var searchParameters = {
        searchValue: this.searchValue,
        page: 1
      }

      try {
          let url = window.location.href.split('/');
          let path = url[url.length-1].split('?')
          let newUrl = url[0] + '//' +url[2] + '/' + path[0] + '?'
          newUrl += `search=${searchParameters.searchValue}&page=1`
          window.location.href = newUrl; 
          this.loaded = true;
        } catch(err) {
          console.log(err)
      } 

  
    }
  },
  computed: {
    offices() {
      return this.$store.getters.loadedOffices
    }
  },

  async created() {
  
    if(!this.$route.query.page || !this.$route.query.search) {
        console.log('test')
      } else {

      const searchParameters = {
        searchValue: this.$route.query.search,
        page: this.$route.query.page,
      
      }

      const companies = await this.loadSearchResultsSimple(searchParameters).then(() => {
        this.loaded = true;
      })
      } 
   
  
  }

}

</script>

<style scoped lang="scss">
  .companies-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    

    &__company {
      border-top: 1px solid grey;
      border-left: 1px solid grey;
      border-right: 1px solid grey;
      margin: 0;
      padding: 0;
      margin-top: -2px;

      &:last-child {
        border-bottom: 1px solid grey;
      }

      & > div {
        display: inline-block;
       border-right: 1px solid grey;
       padding: 7px 10px 5px 10px;

       &:last-child {
         border-right: none;
       }
      }
    }

    &__id {
      width: 5%;
      text-align: center;
      }
    

     &__name {
       width: 40%;
      }

    &__location {
      width: 30%;
      }

    &__buttons {
        text-align: center;
        width: 23%;

      button {
        display: inline-block;
      }
    }
  }
</style>
