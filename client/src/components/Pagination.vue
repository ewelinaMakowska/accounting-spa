<template>
<div class="pagination">
   <!-- <office-thumb :name="office.name" :id="office.id " v-for="(office, id) in offices" :key="id" :office="office" >
                      </office-thumb> -->

  <pagination-button  v-for="(counter) in howManyPages" :key="counter" > {{ counter }} </pagination-button> 
    
     

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
      },
      props: {
       howManyPages: Number
    },
    computed: {
       
    },
    methods: {
      incrementPageNumber() {
        let number = 1
      
        number++;
        return number;
      }
    }
}
     //export default
    

</script>