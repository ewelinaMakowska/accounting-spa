<!--  TODO: albo napisać porządne pobieranie z bazy firmy po id (jest) + getter, żeby pobrać tu wszystkie firmy (czyli jedną)
            albo pobrać tutaj wszystkie firmy i napisać porządny getter do zwracania tylko jednej firmy ze stanu po id -->
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
       
        offices () {
            return this.$store.getters.loadedOffices;
        },
        singleCompany () {
            return this.$store.getters.loadedOffice;
        },
        // loadCompanies() {
        //     return this.$store.dispatch('loadCompaniesAction');
        // }, 
        // loadCompany() {
        //     return this.$store.dispatch('loadCompany');
        // }
        }, //computed
        methods: {
          loadCompany(id) {
            return this.$store.dispatch('loadCompany', id);
        } ,
         loadCompanies() {
            return this.$store.dispatch('loadCompaniesAction');
        }, 
        //  office () {          
        //     //return this.$store.getters.loadedOffice(this.id); //todo: return all 
        //    // return this.$store.getters.oneCompany;
        //     return this.$store.getters.loadedOffice;
        // },
        },
    

 async mounted () {
            console.log("Mounted");
            let id = this.$route.params.id; 
            console.log(id);
            try {
            // await this.loadCompany(id); 
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