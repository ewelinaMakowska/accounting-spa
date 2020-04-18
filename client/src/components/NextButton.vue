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
    props: {
   howManyPages: Number
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
     return this.currentPageNumber = 5 // eslint-disable-line no-unused-vars
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