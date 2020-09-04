<template>


<v-container class="main-container" id="main-container" >
    <v-row>
        <v-col lg="12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br/>
            <button>Logout</button>

        </v-col>
    </v-row>


    <v-row>
        <v-col lg="12">

         

            <v-row>
                 <v-col lg="4">
                     <search></search>
                     <filters></filters>
                      </v-col>

                      <v-col lg="8">

                        
                        <div class="flex-thumbs-container">
                        <office-thumb :name="office.name" :id="office.id " :city="office.city" v-for="(office, id) in offices" :key="id" :office="office" :price="office.price" >
                        </office-thumb>                          
                        </div> <!--flex-container-->

                    
                      <pagination :howManyPages="pageCount" :currentPageNumber="currentPageNumber" :city="this.$route.query.city"/> 

                   
                      </v-col>

            </v-row>

        </v-col>
    </v-row>
</v-container>


</template>

<style>
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



</style>

<script>
import OfficeThumb from '@/components/OfficeThumb.vue';
import Pagination from '@/components/Pagination.vue';  // eslint-disable-line no-unused-vars
import Search from '@/components/Search.vue'; 
import Filters from '@/components/Filters.vue';


export default {
    data() {
        return {   
            office: {},     
            pages : this.pages,
            city: 'Warszawa', //this.$route.query.city
            value: 0,
            currentPageNumber: null,
        }
    },    
    computed: {
        offices () {
            return this.$store.getters.loadedOffices;
        },
        loadCompanies() {
            return this.$store.dispatch('loadCompaniesAction');
        },
        pageCount() {
            return Math.round((this.$store.getters.countValue)/4);
        },
        loadFirst() {
            return this.$store.dispatch('loadFirstPageData');
        }

    },
    name: 'OfficeCatalogue',
    components: {
    OfficeThumb,
    Pagination,
    Search,
    Filters
    }, //components
    methods: {
        loadPage(page) {
            return this.$store.dispatch('loadOnePageData', page);
        },
        loadSearchResults(value) {
             return this.$store.dispatch('loadSearchResultsLimited', value);
        }
         },


async created () {
    console.log("Created");
    const value = {      
        page: null,
        city: null,
        sort: null
    }


    if (this.$route.query.page) { value.page = this.$route.query.page } else { value.page = 1 }
    if (this.$route.query.city) { value.city = this.$route.query.city } else { value.city = '' }
    if (this.$route.query.sort) { value.sort = this.$route.query.sort } else { value.sort = '' }

    console.log(value.page)
    console.log(value.city)
    console.log(value.sort)

       try {
 
    await this.loadSearchResults(value);
        console.log('companies loaded to the state');
    } catch (err) { console.log("fail")
    } finally {
        console.log('state getter used');         
        } //trycatch


} //created 

}//export default

</script>