<template>
<div class="pagination">
  <pagination-button/>
</div>
</template>

<style scoped>
.pagination {
display: flex;
}
</style>

<script>
import PaginationButton from '@/components/PaginationButton.vue'; 

export default {
      components: {
        PaginationButton
      }     
    }
     //export default
    

</script>