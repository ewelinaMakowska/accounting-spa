<template>
<div class="button">
 <!-- {{ pageNumber }} -->
 <a :href="'/?page='+pageNumber" @click="loadPage"> <slot>button</slot></a> <!-- buttony -->
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
    pageNumber: Number
     },
  methods: {
     loadPage() {  
    //event.preventDefault();
          
      console.log("Page data retrieved!");
    
  }},
   computed: {
        offices () {
            return this.$store.getters.loadedOffices;
        },
        loadPageData() {
            return this.$store.dispatch('loadOnePageData');
        }

    },
    
}
</script>