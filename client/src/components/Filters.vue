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
          <input type="radio" id="price_asc" name="price_asc" value="price_asc" @click="setSortParam($event, 'price_asc')">
          <label for="price_asc">rosnąco</label>
          </li>
          <li>
          <input type="radio" id="price_desc" name="price_desc" value="price_desc" @click="setSortParam($event, 'price_desc')">
          <label for="price_desc">malejąco</label>
          </li>
        </ul>
      </li> <!-- price -->
      <li>
        Nazwa
        <ul>
            <li>
          <input type="radio" id="name_asc" name="c" value="name_asc" @click="setSortParam($event, 'name_asc')">
          <label for="name_asc">Od A do Z</label>
          </li>
          <li>
          <input type="radio" id="name_desc" name="name_desc" value="name_desc" @click="setSortParam($event, 'name_desc')">
          <label for="name_desc">Od Z do A</label>
          </li>
        </ul>
      </li> <!-- price -->
    </ul>

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
