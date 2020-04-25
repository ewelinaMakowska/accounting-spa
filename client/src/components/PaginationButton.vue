<template>
<div class="button">
 <!-- {{ pageNumber }} -->
 <a :href="'/?page='+pageNumber" @click="loadPage"> <slot>button</slot></a>


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
    
  },

 /*   search(value) {
    
    const route = {
      path: 'city'
    }
    if(this.search !== '') {
      route.query = {
        city : this.search
      }
    }

    console.log(value);
    this.$router.push(route);
  },
  '$route.query.city': {
    immediate:true,
    handler (value) {
      this.search = value */

  changeUrl() {
      console.log('click!')
    const route = {
        path: 'page'
    }
    route.query = {
        page : this.pageNumber
      }
    this.$router.push(route);

  }
  }, //methods
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