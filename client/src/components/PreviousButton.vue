<template>
<div class="button">
<a :href="'/?page='+(currentPageNumber-1)" > <slot>prev [ {{ currentPageNumber-1 }}]</slot></a> <!-- buttony -->
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
   currentPageNumber: Number
     },
  methods: {

    
  },
  

}


</script>