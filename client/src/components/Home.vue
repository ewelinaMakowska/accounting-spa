

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

                      <office-thumb :name="office.name" :id="office.id " v-for="(office, id) in offices" :key="id" :office="office" >
                      </office-thumb>

                        
                     </div>
                     paginacja
                     <pagination/>
                    <div> <p> Dane z bazy danych: {{ companiesFromDb }} </p></div>
                    <button @click="getAll()">pobierz dane</button>
                   
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
        return {
            companiesFromDb : null
        }
    }, 
    computed: {
        offices () {
            return this.$store.getters.loadedOffices;
        },
        loadCompanies() {
            return this.$store.dispatch('loadCompaniesAction');
        }

    },
    name: 'Home',
    components: {
    OfficeThumb,
    Pagination
    }, //components
    methods: {
        async getAll() {
            try {
                 await CompaniesService.getAllCompanies();
                console.log('service started succesfully');
            }
            catch (err) {
                console.log('companies component service error ')
                console.log(err);
            }
        }, 
         
        // async mounted() {
        //     //this.companiesFromDb = (await CompaniesService.getAllCompanies()).data
        //     this.loadCompanies();
        //     console.log('companies loaded to the state');
        //     this.offices();
        //     console.log('state getter used');
         },  

        async mounted () {
            console.log("Mounted")
            try {
             await this.loadCompanies;
             console.log('companies loaded to the state');
            } catch (err) { console.log("fail")
            } finally {
             this.offices;
             console.log('state getter used');
             }
        }
    }
     //export default

</script>