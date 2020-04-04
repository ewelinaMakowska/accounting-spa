<template>
<div>
    Obiekt {{ company }} <br/>
   Witaj na stronie biura: {{ name }} <br/>
   Id biura to:  {{ id }} <br/> 
   Cena za usługę to: {{ price }} <br/>
   
    </div>
</template>

<style scoped>

</style>

<script>
//import CompaniesService from '@/services/CompaniesService'

export default {
        props: {
            company: Object,
            name: String,
            id: Number,
            price: Number,
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
            console.log(id);
            try {
             await this.loadCompany(id); 
             console.log('company loaded to the state');
            } catch (err) { console.log("fail")
            } finally {
             this.offices;
             console.log('state getter used');
                 console.log(this.id);
            this.company = 'obiekt';
            this.name = 'firma'
            this.price = 100;

                 
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