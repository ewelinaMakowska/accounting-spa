<template>
<div class="pagination">
   <!-- <office-thumb :name="office.name" :id="office.id " v-for="(office, id) in offices" :key="id" :office="office" >
                      </office-thumb> -->

  <previous-button :city="$props.city" v-if="this.$route.query.page>1"></previous-button> <!-- renderowany gdy parametr większy 1 -->
  <pagination-button   v-for="(counter) in howManyPages" :key="counter" :pageNumber="counter" :city="$props.city" :sort="$props.sort" > {{ counter }} </pagination-button> 
  <!-- <next-button :howManyPages="this.$props.howManyPages"></next-button>  -->
   <next-button v-if="this.$props.howManyPages>0 && this.$route.query.page<howManyPages" :howManyPages="this.$props.howManyPages" :city="$props.city"></next-button>  
   <!-- renderowany gdy parametr mniejszy niż max -->

</div>
</template> 

<!-- <style scoped>
.pagination {
display: flex;
}

.button {
  padding-right: 15px;
}
</style> -->

<script>
import PaginationButton from './PaginationButton.vue'; 
import PreviousButton from './PreviousButton.vue'; 
import NextButton from './NextButton.vue'; 
//uruchomić z tego poziomu akcję kontrolera i przekazać informację o numerze strony ?? + getter ?
export default {


    
      components: {
        PaginationButton,
        PreviousButton,
        NextButton
      },
      props: {
       howManyPages: Number,
        sort: {
         type: String,
         default: ""
       },
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