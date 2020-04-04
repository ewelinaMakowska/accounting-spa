<template>
<div>
   Obiekt {{ company }} <br/>
   Witaj na stronie biura: {{ company.name }} <br/>
   Id biura to:  {{ company.id }} <br/> 
   Cena za usługę to: {{ company.price }} <br/>
   
    </div>
</template>

<style scoped>

</style>

<script>
//import CompaniesService from '@/services/CompaniesService'

export default {
        data() {
        return {
            company: null
            }
    },
    // data() {
    //     return {
    //      ID: this.id 
    //     }
    // },
    computed: {
        office () {          
            //return this.$store.getters.loadedOffice(this.id); //todo: return all 
            return this.$store.getters.loadedOffices;
        },
        offices () {
            return this.$store.getters.loadedOffices;
        },
        singleCompany () {
            return this.$store.getters.oneCompany;
        },
        loadCompanies() {
            return this.$store.dispatch('loadCompaniesAction');
        }, 
        // loadCompany() {
        //     return this.$store.dispatch('loadCompany');
        // }
        }, //computed
        methods: {
          loadCompany(id) {
            return this.$store.dispatch('loadCompany', id);
        }  
        },
    

 async mounted () {
            console.log("Mounted");
            let id = this.$route.params.id; 
            console.log(id);
            try {
             await this.loadCompany(id); 
             console.log('company loaded to the state');
            } catch (err) { console.log("fail")
            } finally {
       
            this.company = this.offices;
            console.log(this.company)


                 
             } //trycatch
        } //mounted
    
//    async created () {
//              console.log("Mounted");
//              const id = this.$route.params.this.id; 
//             try {
//              await CompaniesService.getOne(id);
//              console.log('company loaded to the state');
//             } catch (err) { console.log("fail")
//             } finally {
//              this.office;
//              console.log('state getter used');
//                  console.log(this.this.id);
//              } //trycatch
//         } //mounted     
    
    }
   // eslint-disable-line no-unused-vars 

    //przechować dane o id w cookie sesyjnym (?)
    

</script>