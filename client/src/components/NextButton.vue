<template>
<div class="button">
<a :href="'/?page='+(this.currentPageNumber)" > next </a> <!-- buttony -->
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
   if(this.$route.query.page < this.$store.getters.countValue/4) {
   return this.currentPageNumber =  parseInt(this.$route.query.page)+1 // eslint-disable-line no-unused-vars
   
   } 
   else if(!this.$route.query.page) {
     return this.currentPageNumber =  2;
   }
   else  {
     return this.currentPageNumber = 3 // eslint-disable-line no-unused-vars
   }
 },
  methods: {

    
  },
  

}


</script>