<template>
<div class="button">
<a :href="'/?page='+(this.currentPageNumber)" > prev </a> <!-- buttony -->
</div>
</template>

<style scoped>
.button {
  padding-right: 15px;
}
</style>

<script>


export default {
 
 data() {
   if(this.$route.query.page >= 2) {
   return this.currentPageNumber =  parseInt(this.$route.query.page)-1 // eslint-disable-line no-unused-vars
   
   } else  {
     return this.currentPageNumber = 1 // eslint-disable-line no-unused-vars
   }
 },
  methods: {

    
  },
  

}


</script>