<template>
<div class="pagination">
   <!-- <office-thumb :name="office.name" :id="office.id " v-for="(office, id) in offices" :key="id" :office="office" >
                      </office-thumb> -->
<a href="" class="button">prev</a>
  <pagination-button  v-for="(counter) in howManyPages" :key="counter" :pageNumber="counter"> {{ counter }} </pagination-button> 
<a href="" class="button">next</a>    
     

</div>
</template>

<style scoped>
.pagination {
display: flex;
}

.button {
  padding-right: 15px;
}
</style>

<script>
import PaginationButton from '@/components/PaginationButton.vue'; 
//uruchomić z tego poziomu akcję kontrolera i przekazać informację o numerze strony ?? + getter ?
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