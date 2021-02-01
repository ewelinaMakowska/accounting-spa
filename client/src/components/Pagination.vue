<template>
  <div class="pagination__wrapper">

    <ul class="pagination">
      <li class="pagination__button" v-for="(page) in pages" :key="page">
        <button @click="updatePathParams($event)">{{page}}</button>
      </li>

      
      </ul> 

   
    
  </div>
</template>

<!-- <style scoped>

</style> -->

<script>

export default {
  props: {
    numberOfPages: {
      type: Number,
    },

  },
  data() {
    return {
      pages : [],
      filteredPages: [],
      searchParams: this.$route.query

      //currentPageNumber: this.$route.query.page
    }
  },


  methods: {
    generatePageNumbers() {
    /* for (let i=1; i<= this.numberOfPages; i++) {
        this.pages.push(i)
      }  */
      console.log(this.searchParams)
      let currentPage = this.searchParams.page;
      if (!currentPage) {currentPage = 1}
      let oneBefore 
      let twoBefore 
      let oneAfter 
      let twoAfter 

      this.pages.push(currentPage)

      oneBefore = currentPage-1
      twoBefore = currentPage-2
      oneAfter = parseInt(currentPage)+1
      twoAfter = parseInt(currentPage)+2

      if(oneBefore > 1) {
        this.pages.unshift(oneBefore)
      }
      if (twoBefore > 1) {
        this.pages.unshift(twoBefore)
      }
      this.pages.push(oneAfter)
      this.pages.push(twoAfter)

      this.pages.unshift(1)
      this.pages.push(this.numberOfPages)

      if(currentPage == 1) {
        this.pages.shift();
      }

      if(Math.abs(currentPage-this.numberOfPages) <= 2) {
        this.pages.pop();
      } 

      if(Math.abs(currentPage-this.numberOfPages) <= 1) {
        this.pages.pop();
      } 

      if(Math.abs(currentPage-this.numberOfPages) == 0) {
        this.pages.pop();
      } 

      //construct url
      
      //console.log(pages) 
    },

    updatePathParams($event) {
      let url = window.location.href.split('/');
      let path = url[url.length-1].split('?')
      const currentQuery = this.$route.query;  
      let newPage = $event.target.innerText;


    
      let newUrl = url[0] + '//' +url[2] + '/' + path[0] + '?'


      if(currentQuery.city) {
        newUrl += `&city=${currentQuery.city}`
      } 
      //todo with other query params
    
      currentQuery.page = newPage
      newUrl += `&page=${newPage}`

      window.location.href = newUrl;
    }
  }, 

  computed: {
 
  },
    async mounted() {
      console.log('pagination mounted')
      this.generatePageNumbers()
    }
}
</script>
