
<template>


<v-container class="main-container" id="main-container" >
    <v-row>
        <v-col lg="12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
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

                        <!-- <office-thumb :name="office.name" :id="office.id " v-for="(office, id) in offices" :key="id" :office="office" >
                        </office-thumb> -->

                        <office-thumb :name="office.name" :id="office.id " :city="office.city" v-for="(office, id) in offices" :key="id" :office="office" :price="office.price" >
                        </office-thumb>

                            
                        </div> <!--flex-container-->

                    
                      <pagination :howManyPages="pageCount" :currentPageNumber="currentPageNumber" :city="this.$route.query.city"/> 
                    <!-- <div> <p> Dane z bazy danych: {{ companiesFromDb }} </p></div>
                    <button @click="getAll()">pobierz dane</button> -->
                   
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
//import CompaniesService from '@/services/CompaniesService.js' 
import Search from '@/components/Search.vue'; 
import Filters from '@/components/Filters.vue';


export default {
    data() {
       
       // let pages = [];
       // let counter = this.pageCount();
      //const howManyPages = this.pageCount;
      
    //   while(counter > 0) {
    //     pages.push(counter);
    //     counter--;
    //   }
     // pages = [ 1,2,3 ]

    

      //console.log(pages);


    //  let page = this.$route.query.page || 1; //eslint-disable-line no-unused-vars

        return {
            
           // companiesFromDb : null,
           // howManyButtons: 2,
           // buttonNumber: 1,
            //pageCountValue: this.pageCount,
            pages : this.pages,
            city: 'Warszawa', //this.$route.query.city
            value: 0
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
 /*    watch: {
        '$route.query.city': {
            immediate: true,
            async handler(value) {   
                await this.loadSearchResults(value);
                console.log(`handler invoked: ${value}`)
            }
            
        } */
    


/*     async created () {
    console.log("Created");

    if (this.$route.query.page) {
    var page = this.$route.query.page; 
    } else {
        page = 1;
    }
    
        try {
    // await this.loadCompanies;
    //console.log(this.$route.query.page)
    
    await this.loadPage(page);
        console.log('companies loaded to the state');
    } catch (err) { console.log("fail")
    } finally {
        //this.offices;
        console.log('state getter used');         
        } //trycatch
    
} //created */

async created () {
    console.log("Created");
/* 
    if (this.$route.query.page) {
         var page = this.$route.query.page;
         var city = this.$route.query.city;}
    else {
         page = 1;
         city = null
    } */

      const value = {
        
        page: null,
        city: null,
        sort: null
    }

    if (this.$route.query.page) {  value.page = this.$route.query.page } else { value.page = 1 }
    if (this.$route.query.city) { value.city = this.$route.query.city } else { value.city = '' }
    if (this.$route.query.sort) { value.sort = this.$route.query.sort } else { value.city = '' }


  


    console.log(value.page)
    console.log(value.city)
    console.log(value.sort)

       try {
    // await this.loadCompanies;
    //console.log(this.$route.query.page)
    
    await this.loadSearchResults(value);
        console.log('companies loaded to the state');
    } catch (err) { console.log("fail")
    } finally {
        //this.offices;
        console.log('state getter used');         
        } //trycatch


} //created 

}//export default

</script>