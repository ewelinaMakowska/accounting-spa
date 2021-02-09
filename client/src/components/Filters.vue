<template>
  <div class="filters">
    <button @click="showSortOptions()" class="filters__button">
      Filtry
    </button>

    <button @click="showSortOptions()" class="filters__button">
      Sortowanie
    </button>

    <div class="filters__bubble filters__bubble--sort sort-options" style="display:block">
          <div class="triangle triangle--sort"></div>

        <p class="filter-name">Cena</p>
        <ul class="filter-list">
          <li>
            <label class="filter__label" for="price_asc">
              <span class="filter__pseudo-label">rosnąco &nbsp;</span>
              <input class="filter__input" type="radio" id="price_asc" name="price_asc" value="price_asc" @click="setSortParam($event, 'price_asc')">
              <svg xmlns='http://www.w3.org/2000/svg' class="filter__icon" viewBox='0 0 512 512'><path d='M112 328l144-144 144 144'/></svg>    
            </label>
          </li>

          <li>
            <label class="filter__label" for="price_desc">
              <span class="filter__pseudo-label">malejąco</span>
              <input class="filter__input" type="radio" id="price_desc" name="price_desc" value="price_desc" @click="setSortParam($event, 'price_desc')">
              <svg xmlns='http://www.w3.org/2000/svg' class="filter__icon" viewBox='0 0 512 512'><path d='M112 184l144 144 144-144'/></svg>   
            </label>
          </li>

       <!--    <li>
            <input type="radio" id="price_desc" name="price_desc" value="price_desc" @click="setSortParam($event, 'price_desc')">
            <label for="price_desc">malejąco</label>
          </li> -->
        </ul>

        <p class="filter-name">Nazwa biura</p>
        <ul class="filter-list">
          <li>
            <input type="radio" id="name_asc" name="c" value="name_asc" @click="setSortParam($event, 'name_asc')">
            <label for="name_asc">Od A do Z</label>
          </li>

          <li>
            <input type="radio" id="name_desc" name="name_desc" value="name_desc" @click="setSortParam($event, 'name_desc')">
            <label for="name_desc">Od Z do A</label>
          </li>
        </ul>
    </div>

  <div class="filters__bubble filters__bubble--filter filter-options" style="display: none;">
     Sposób rozliczania
    <ul>
      <li>
        <input type="radio" id="ledger" name="ledger" value="ledger" @click="setFilterAccountingMethod($event, 'ledger')">
        <label for="ledger">Księga Przychodów i Rozchodów</label>
      </li>
       <li>
        <input type="radio" id="lump_sum" name="lump_sum" value="lump_sum" @click="setFilterAccountingMethod($event, 'lump_sum')">
        <label for="lump_sum">Ryczałt</label>
      </li>
    </ul>
  </div>
   
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
    setSortParam($event, sortParam) {
      let url = window.location.href.split('/');
      let path = url[url.length-1].split('?')
      const currentQuery = this.$route.query;  
      //let newSortParam = sortParam;

      let newUrl = url[0] + '//' +url[2] + '/' + path[0] + '?'

      if(currentQuery.city) {
        newUrl += `&city=${currentQuery.city}`
      } 

      newUrl += `&sort=${sortParam}`

      if(currentQuery.accounting) {
        newUrl += `&accounting=${currentQuery.accounting}`
      }           

      if(currentQuery.page) {
        newUrl += `&page=1`
      }    
      window.location.href = newUrl;
    },
    setRadiosChecked() {
      const currentQuery = this.$route.query;  
      let radioAccounting;
      let radioSort;

      if(currentQuery.accounting) {
        radioAccounting = document.querySelectorAll(`input[value=${currentQuery.accounting}]`);
        radioAccounting[0].checked = true;
      }

      if(currentQuery.sort) {
        radioSort = document.querySelectorAll(`input[value=${currentQuery.sort}]`);
        radioSort[0].checked = true;
      }
    },
    setFilterAccountingMethod($event, accountingMethod) {
      console.log(accountingMethod);
      $event.target.setAttribute('checked','true');

      let url = window.location.href.split('/');
      let path = url[url.length-1].split('?')
      const currentQuery = this.$route.query;  
      let newAccountingMethod = accountingMethod;

  

      let newUrl = url[0] + '//' +url[2] + '/' + path[0] + '?'

      if(currentQuery.city) {
        newUrl += `&city=${currentQuery.city}`
      } 

      if(currentQuery.sort) {
        newUrl += `&sort=${currentQuery.sort}`
      } 
      
      newUrl += `&accounting=${accountingMethod}`
      
      if(currentQuery.page) {
        newUrl += `&page=1`
      }
    
      window.location.href = newUrl;
    },
  },
  mounted(){
    console.log('filters mounted')
    this.setRadiosChecked();
}
}
</script>
