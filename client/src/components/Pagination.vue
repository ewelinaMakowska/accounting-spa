<template>
<div class="pagination">
   <!-- <office-thumb :name="office.name" :id="office.id " v-for="(office, id) in offices" :key="id" :office="office" >
                      </office-thumb> -->

  <pagination-button v-for="(counter) in pages" :key="counter"  />

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
      data() {
      const pages = [];
      //const howManyPages = this.pageCount;
      
      while(this.pageCount > 0) {
        pages.push(this.pageCount);
        this.pageCount--;
      }

      console.log(pages);
      
      return { pages }
    },
      components: {
        PaginationButton
      },
      props: {
       pageCount: Number
    },
    computed: {
       
    }
}
     //export default
    

</script>