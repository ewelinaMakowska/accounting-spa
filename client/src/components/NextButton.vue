<template>
<div class="button">

<!-- <a :href="'/search/?page='+(this.currentPageNumber)+'&city='+this.$props.city" > next </a> -->

<a :href="'/search?city='+this.$props.city+'&page='+(this.currentPageNumber)" > next </a>
<!-- 
<a :href="'/search?city='+this.$props.city+'&page='+pageNumber"> <slot>button</slot></a> -->

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
   howManyPages: Number,
   city: String
 },
 data() {
   if(this.$route.query.page < this.$props.howManyPages) {
    //  if(this.$route.query.page < 3) {
      
   return this.currentPageNumber =  parseInt(this.$route.query.page)+1 // eslint-disable-line no-unused-vars
   
   } 
   else if(!this.$route.query.page) {
     return this.currentPageNumber =  2;
   }
   else  {
     console.log(this.$props.howManyPages)
      console.log(this.$route.query.page)
     return this.currentPageNumber = this.$props.howManyPages // eslint-disable-line no-unused-vars
   }
 },
}

// data() {
//   return {
//     x : 1
//   }
// }

// }


</script>