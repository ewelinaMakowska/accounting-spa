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
        id: String
    },
    computed: {
        office () {
            return this.$store.getters.loadedOffice(this.id);
        },
    }  
}
</script>