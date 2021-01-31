<template>
  <div
    id="main-container"
    class="main-container container"
  >
    <div class="row">
      <div
        class="col-lg-12"
        lg="12"
      >
      <img src="assets/img/dummy-logo.svg" height="100px" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        <br>
        <br>
        <button
          v-if="$store.state.isUserLoggedIn"
          @click="logout()"
        >
          Log Out
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-4">
            <search />
            <filters />
          </div>

          <div class="col-lg-8">
            <div class="flex-thumbs-container" v-if="loaded">
              <office-thumb
                v-for="(office, id) in offices"
                :id="office.id "
                :key="id"
                :name="office.name"
                :city="office.City"
                :office="office"
                :price="office.price"
              />
            </div> <!--flex-container-->

      <!--       <pagination
              :how-many-pages="pageCount"
              :current-page-number="currentPageNumber"
              :city="this.$route.query.city"
            /> -->

            <pagination :searchParams="this.searchParams"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <style>
* {
    font-family: 'Roboto', sans-serif;
}

.main-container {
    margin: 30px auto;
}

.flex-thumbs-container {
display: flex;
flex-wrap: wrap;
padding: 20px;
}

</style> -->

<style lang="scss">
    .office-thumb {
        color: #ffffff;
        background: black;
        }

    @import '../../assets/scss/app.scss';

</style>

<script>
import OfficeThumb from '../components/OfficeThumb.vue'
import Pagination from '../components/Pagination.vue' // eslint-disable-line no-unused-vars
import Search from '../components/Search.vue'
import Filters from '../components/Filters.vue'

export default {
  name: 'OfficeCatalogue',
  components: {
    OfficeThumb,
    Pagination,
    Search,
    Filters
  },
  data () {
    return {
      office: {},
      pages: this.pages,
      city: 'Warszawa', // this.$route.query.city
      value: 0,
      currentPageNumber: null,
      loaded: false,
      searchParams: null
    }
  },
  computed: {
    offices () {
      return this.$store.getters.loadedOffices
    },
    loadCompanies () {
    //  return this.$store.dispatch('loadCompaniesAction')
    },
    pageCount () {
      return Math.round((this.$store.getters.countValue) / 2)
    },
    loadFirst () {
      //return this.$store.dispatch('loadFirstPageData')
    }

  },

  async created () {
    console.log('Created')

    //check if officepage
    let url = window.location.href.split('/');
    console.log(url)

    if(url[3] !== 'office' ){
       let searchParams = {
        page: null,
        city: null,
        sort: null,
        filter: null
    }  

    if (this.$route.query.page) {searchParams.page = this.$route.query.page } else {searchParams.page = 1 }
    if (this.$route.query.city) {searchParams.city = this.$route.query.city } else {searchParams.city = '' }
    if (this.$route.query.sort) { searchParams.sort = this.$route.query.sort } else {searchParams.sort = '' }

    console.log(searchParams.page)
    console.log(searchParams.city)
    console.log(searchParams.sort)

  if (searchParams.city) {
    try {
      await this.loadSearchResults(searchParams).then(() => {
        console.log('companies loaded to the state');
        this.loaded = true;
      })
    } catch (err) {
      console.log('fail')
    } finally {
      console.log('state getter used')
    } // trycatch 

    } else {
      //load only first 4 citites
      try {
        await this.loadPage(searchParams).then(() => {
        console.log('companies loaded to the state');
        this.loaded = true;
      })
      } catch (err) {
        console.log('fail')
      } finally {
        console.log('state getter used')
      } // trycatch
    }
    this.searchParams = searchParams;
    }
  
  }, // components
  methods: {
    loadPage(page) {
      return this.$store.dispatch('loadOnePageData', page)
    },
    loadSearchResults(value) {
      return this.$store.dispatch('loadSearchResultsLimited', value)
    },
    logout () {
      this.$store.dispatch('setTokenAction', null)
      this.$store.dispatch('setUserAction', null)

      localStorage.removeItem('user')
      localStorage.removeItem('token')
      localStorage.removeItem('isUserLoggedIn')

      // todo: remove token from local storage
    }
  } // created

}// export default

</script>
