<template>
<div class="button">
<a :href="'/?page='+pageNumber" @click="loadPage"> <slot>prev</slot></a> <!-- buttony -->
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
   
     },
  methods: {
  
    
  },
   computed: {
       

    },
    
}
</script>