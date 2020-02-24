<template>
<div>
    Obiekt {{ office }} <br/>
   Witaj na stronie biura: {{ office.name }} <br/>
   Id biura to:  {{ office.id }} <br/> 
   Cena za usługę to: {{ office.price }} <br/>
   
    </div>
</template>

<style scoped>

</style>

<script>
//import CompaniesService from '@/services/CompaniesService'

export default {
    props: {
        id: Number
    },
    // data() {
    //     return {
    //      ID: this.id 
    //     }
    // },
    computed: {
        office () {          
            return this.$store.getters.loadedOffice(this.id); //todo: return all 
        },
        offices () {
            return this.$store.getters.loadedOffices;
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
            const id = this.$route.params.id; 
            try {
             await this.loadCompany(id); 
             console.log('company loaded to the state');
            } catch (err) { console.log("fail")
            } finally {
             this.offices;
             console.log('state getter used');
                 console.log(this.id);
             } //trycatch
        } //mounted
    
//    async created () {
//              console.log("Mounted");
//              const id = this.$route.params.id; 
//             try {
//              await CompaniesService.getOne(id);
//              console.log('company loaded to the state');
//             } catch (err) { console.log("fail")
//             } finally {
//              this.office;
//              console.log('state getter used');
//                  console.log(this.id);
//              } //trycatch
//         } //mounted     
    
    }
   // eslint-disable-line no-unused-vars 

    //przechować dane o id w cookie sesyjnym (?)
    

</script>