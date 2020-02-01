

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
                    <div> <p> Dane z bazy danych: {{ companiesFromDb }} </p></div>

                   
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
import CompaniesService from '@/services/CompaniesService'

export default {
    data() {
        return {
            companiesFromDb : null
        }
    }, 
    computed: {
        offices () {
            return this.$store.getters.loadedOffices;
        }
    },
    name: 'Home',
    components: {
    OfficeThumb
    }, //components
    methods: {
        async getAll () {
            try {
                await CompaniesService.GetAllCompanies();
            }
            catch (err) {
                console.log('companies service error')
            }
        },
        async mounted() {
            this.companiesFromDb = (await CompaniesService.getAllCompanies().data)
        } 
    }
    } //export default

</script>