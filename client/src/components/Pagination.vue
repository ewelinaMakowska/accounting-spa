<template>
  <div class="pagination__wrapper">

    <ul class="pagination" id="pagination">
      <li class="pagination__button-wrapper" v-for="(page) in pages" :key="page">
        <button class="pagination__button" @click="updatePathParams($event)">{{page}}</button>
      </li>

      
      </ul> 

   
    
  </div>
</template>

 <style lang="scss" scoped>
  .pagination {
    list-style: none;
  
    &__button-wrapper {
      display: inline-block;
    }
  }
</style> 

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
      searchParams: this.$route.query,
    }
  },


  methods: {
    generatePageNumbers() {
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

      this.pages.unshift('prev');

      if(currentPage == 1) {
        this.pages.shift();
      }

      this.pages.push('next')


      if(currentPage == this.numberOfPages) {
        this.pages.pop();
      }      
      //console.log(pages) 
    },
    updatePathParams($event) {
      let url = window.location.href.split('/');
      let path = url[url.length-1].split('?')
      const currentQuery = this.$route.query;  
      let newPage

      if($event.target.innerText == 'prev') {
        newPage = parseInt(currentQuery.page)-1
        console.log(newPage)
      } else if($event.target.innerText == 'next') {
        newPage = parseInt(currentQuery.page)+1
        } else {
        newPage = $event.target.innerText;
      }
      let newUrl = url[0] + '//' +url[2] + '/' + path[0] + '?'

      if(currentQuery.city) {
        newUrl += `&city=${currentQuery.city}`
      } 

      if(currentQuery.accounting) {
        newUrl += `&accounting=${currentQuery.accounting}`
      } 
      //todo with other query params
    
      currentQuery.page = newPage
      newUrl += `&page=${newPage}`

      window.location.href = newUrl;
    },
    disableCurrentPageBtn() {
      let pagBtns = document.getElementsByClassName('pagination__button');
      for(let i = 0; i<pagBtns.length; i++) {
        if(pagBtns[i].innerText == this.$route.query.page) {
          pagBtns[i].setAttribute('disabled','true')
          pagBtns[i].classList.add('active')
        }
      }
    }
  }, 

  computed: {
 
  },
    async created() {
      console.log('pagination created')
      this.generatePageNumbers();
    },
    async mounted() {
      console.log('pagination mounted')
      this.disableCurrentPageBtn()
    }
}
</script>
