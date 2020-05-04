<template>
<div class="pagination">
   <!-- <office-thumb :name="office.name" :id="office.id " v-for="(office, id) in offices" :key="id" :office="office" >
                      </office-thumb> -->
  <previous-button :city="$props.city"></previous-button>
  <pagination-button   v-for="(counter) in howManyPages" :key="counter" :pageNumber="counter" :city="$props.city" > {{ counter }} </pagination-button> 
  <!-- <next-button :howManyPages="this.$props.howManyPages"></next-button>  -->
   <next-button v-if="this.$props.howManyPages>0" :howManyPages="this.$props.howManyPages" :city="$props.city"></next-button>  

</div>
</template> -->

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
import PreviousButton from '@/components/PreviousButton.vue'; 
import NextButton from '@/components/NextButton.vue'; 
//uruchomić z tego poziomu akcję kontrolera i przekazać informację o numerze strony ?? + getter ?
export default {


    
      components: {
        PaginationButton,
        PreviousButton,
        NextButton
      },
      props: {
       howManyPages: Number,
       /* city: {
         type: String,
         default: 'Warszawa'
       } */
       city: {
         type: String,
         default: ""
       }

       
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