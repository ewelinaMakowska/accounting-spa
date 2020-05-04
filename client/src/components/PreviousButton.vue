<template>
<div class="button">
<!-- <a :href="'/?page='+(this.currentPageNumber)" > prev </a>  -->
<a :href="'/search/?page='+(this.currentPageNumber)+'&city='+this.$props.city" > prev </a>
</div>
</template>

<style scoped>
.button {
  padding-right: 15px;
}
</style>

<script>


export default {
  props: {
   city: String
 },
 data() {
   if(this.$route.query.page >= 2) {
   return this.currentPageNumber =  parseInt(this.$route.query.page)-1 // eslint-disable-line no-unused-vars
   
   } else  {
     return this.currentPageNumber = 1 // eslint-disable-line no-unused-vars
   }
 }



}


</script>