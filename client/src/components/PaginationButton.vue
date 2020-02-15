<template>
<div class="button">
 <!-- {{ pageNumber }} -->
 <a :href="'/?page='+pageNumber" @click="retrieveFourCompanies"> <slot>button</slot></a> <!-- buttony -->
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
    retrieveFourCompanies() {  
      console.log("Retrieved!");
    }
  }
    
}
</script>