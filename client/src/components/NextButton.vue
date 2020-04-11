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
   return {
   currentPageNumber: parseInt(this.$route.query.page)+1 // eslint-disable-line no-unused-vars
   }
 },
  methods: {

    
  },
  

}


</script>