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
export default {
    props: {
        id: Number
    },
 
    computed: {
        office () {          
            return this.$store.getters.loadedOffice(this.id); //todo: return all 
        },
        loadCompanies() {
            return this.$store.dispatch('loadCompaniesAction');
        } //todo: load only one company from db 
       
        }, //computed
        
 async created () {
            console.log("Mounted")
            try {
             await this.loadCompanies;
             console.log('companies loaded to the state');
            } catch (err) { console.log("fail")
            } finally {
             this.office;
             console.log('state getter used');
                 console.log(this.id);
             } //trycatch
        } //mounted
    
       
    
    }
    

    //przechować dane o id w cookie sesyjnym (?)
    

</script>