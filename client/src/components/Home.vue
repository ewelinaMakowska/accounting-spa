

<template>


<v-container class="main-container">
    <v-row>
        <v-col lg="12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </v-col>
    </v-row>


    <v-row>
        <v-col lg="12">
            lista biur księgowych 

            <v-row>
                 <v-col lg="4">
                     wyszukiwarka
                      </v-col>

                      <v-col lg="8">

                          biura:
                     <div class="flex-thumbs-container">

                      <!-- <office-thumb :name="office.name" :id="office.id " v-for="(office, id) in offices" :key="id" :office="office" >
                      </office-thumb> -->

                      <office-thumb :name="office.name" :id="office.id " v-for="(office, id) in offices" :key="id" :office="office" >
                      </office-thumb>

                        
                     </div> <!--flex-container-->
                     paginacja
                     <pagination :howManyPages="pageCount"/>
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
import CompaniesService from '@/services/CompaniesService.js' 

export default {
    data() {
        let pages = [];
       // let counter = this.pageCount();
      //const howManyPages = this.pageCount;
      
    //   while(counter > 0) {
    //     pages.push(counter);
    //     counter--;
    //   }
      pages = [ 1,2,3 ]

      console.log(pages);

    //  let page = this.$route.query.page || 1; //eslint-disable-line no-unused-vars

        return {
            
           // companiesFromDb : null,
           // howManyButtons: 2,
           // buttonNumber: 1,
            //pageCountValue: this.pageCount,
            pages : this.pages,
       
            
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
            return (this.$store.getters.countValue)/4;
        },
        loadFirst() {
            return this.$store.dispatch('loadFirstPageData');
        }

    },
    name: 'Home',
    components: {
    OfficeThumb,
    Pagination
    }, //components
    methods: {
        loadPage(page) {
            return this.$store.dispatch('loadOnePageData', page);
        },
        async getAll() {
            try {
                 await CompaniesService.getAllCompanies();
                console.log('service started succesfully');
            }
            catch (err) {
                console.log('companies component service error ')
                console.log(err);
            }
        }, //getAll
         
        // async mounted() {
        //     //this.companiesFromDb = (await CompaniesService.getAllCompanies()).data
        //     this.loadCompanies();
        //     console.log('companies loaded to the state');
        //     this.offices();
        //     console.log('state getter used');
         },  //methods

        // async created () {
        //     console.log("Mounted");
    
        //     if(this.page){
        //      try {
        //     // await this.loadCompanies;
        //     console.log(this.$route.query.page)
            
        //     await this.loadPage(this.page);
        //      console.log('companies loaded to the state');
        //     } catch (err) { console.log("fail")
        //     } finally {
        //      this.offices;
        //      console.log('state getter used');         
        //      } //trycatch

        //     } else {
        //          try {
        //     // await this.loadCompanies;
        //     await this.loadFirst();
        //      console.log('companies loaded to the state');
        //     } catch (err) { console.log("fail")
        //     } finally {
        //      this.offices;
        //      console.log('state getter used');         
        //      } //trycatch
        //     }
        // } //mounted



         async created () {
            console.log("Mounted");
            var page = this.$route.query.page; 
            console.log(page);
             try {
            // await this.loadCompanies;
            //console.log(this.$route.query.page)
            
            await this.loadPage(page);
             console.log('companies loaded to the state');
            } catch (err) { console.log("fail")
            } finally {
             this.offices;
             console.log('state getter used');         
             } //trycatch
         
        } //mounted
    }//export default

</script>