<template>
  <div>
    <button @click="showSortOptions()">
      Sortowanie
    </button>
    <ul class="sort__options">
      <li>
        Cena
        <ul class="price__options">
          <li>
            <button @click="sortPriceAscending()">
              Najtańsze
            </button>
          </li>
          <li>
            <button @click="sortPriceDescending()">
              Najdroższe
            </button>
          </li>
        </ul>
      </li> <!-- price -->
      <li>
        Nazwa
        <ul>
          <li>Od A do Z</li>
          <li>Od Z do A</li>
        </ul>
      </li> <!-- price -->
    </ul>

    Sposób rozliczania
    <ul>
      <li>
        <button @click="setFilterAccountingMethod('ledger')">
          Księga Przychodów i Rozchodów
        </button>  
      </li>
       <li>
        <button @click="setFilterAccountingMethod('lump_sum')">
          Ryczałt
        </button>  
      </li>
    </ul>
  </div>
</template>

<!--<style lang="scss">
 .hidden { display: none; }
</style> -->

<script>
export default {
  methods: {
    showSortOptions () {
      const sortOptionsList = document.getElementsByClassName('sort__options')
      console.log(sortOptionsList)
      sortOptionsList.classList.toggle('hidden')
    },

    sortPriceAscending () {
      console.log('sort asc!')

      const currentParams = this.$route.query
      console.log(currentParams)
      console.log(window.location.href)

      this.$router.push({ path: this.$route.path, query: { city: this.$route.query.city, sort: 'price_asc', page: '1' } })
      window.location.reload()
    },
    sortPriceDescending () {
      console.log('sort desc!')

      const currentParams = this.$route.query
      console.log(currentParams)
      console.log(window.location.href)

      this.$router.push({ path: this.$route.path, query: { city: this.$route.query.city, sort: 'price_desc', page: '1' } })
      window.location.reload()
    },
    setFilterAccountingMethod(accountingMethod) {
      console.log(accountingMethod);

      let url = window.location.href.split('/');
      let path = url[url.length-1].split('?')
      const currentQuery = this.$route.query;  
      let newAccountingMethod = accountingMethod;

  

      let newUrl = url[0] + '//' +url[2] + '/' + path[0] + '?'

      if(currentQuery.city) {
        newUrl += `&city=${currentQuery.city}`
      } 
      
      newUrl += `&accounting=${newAccountingMethod}`
      
      if(currentQuery.page) {
        newUrl += `&page=1`
      }
    
      window.location.href = newUrl;

    }
  }
}
</script>
