<template>
<div>
   Witaj na stronie biura:  <br/>
   Id biura to: {{  }}  <br/>
   Cena za usługę to:  <br/>
   
    </div>
</template>

<style scoped>

</style>

<script>
export default {
    props: {
        name: String,
        id: String,
        price: Number
    },
    
   
}
</script>