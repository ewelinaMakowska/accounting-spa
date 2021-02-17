<template>
  <div class="filters">
    <button class="filters__button">
      Filtry
    </button>

    <button @click="showBubble('sort')" class="filters__button">
      Sortowanie
    </button>

    <div v-if="filtersVisibilitySettings.sort.showBubble" class="filters__bubble filters__bubble--sort sort-options" id="filters__bubble--sort">
        <div class="triangle triangle--sort"></div>
        <button @click="hideBubble('sort')" class="bubble__close-btn" id="sort-close-btn">
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>
        </button>

        <p class="filter-name">Cena</p>
        <ul class="filter-list">
          <li>
            <label class="filter__label" for="price_asc">
              <span class="filter__pseudo-label">rosnąco &nbsp;&nbsp;&nbsp;&nbsp;</span>
              <input class="filter__input" type="radio" id="price_asc" name="price_asc" value="price_asc" @click="setSortParam($event, 'price_asc')">
              <svg xmlns='http://www.w3.org/2000/svg' class="filter__icon" viewBox='0 0 512 512'><path d='M112 328l144-144 144 144'/></svg>    
            </label>
          </li>

          <li>
            <label class="filter__label" for="price_desc">
              <span class="filter__pseudo-label">malejąco&nbsp;&nbsp;&nbsp;</span>
              <input class="filter__input" type="radio" id="price_desc" name="price_desc" value="price_desc" @click="setSortParam($event, 'price_desc')">
              <svg xmlns='http://www.w3.org/2000/svg' class="filter__icon" viewBox='0 0 512 512'><path d='M112 184l144 144 144-144'/></svg>   
            </label>
          </li>
        </ul>

        <p class="filter-name">Nazwa biura</p>
        <ul class="filter-list">
          <li>
            <label class="filter__label" for="name_asc">
              <span class="filter__pseudo-label">Od A do Z &nbsp;</span>
              <input class="filter__input" type="radio" id="name_asc" name="name_asc" value="name_asc" @click="setSortParam($event, 'name_asc')">
              <svg xmlns='http://www.w3.org/2000/svg' class="filter__icon" viewBox='0 0 512 512'><path d='M112 328l144-144 144 144'/></svg>    
            </label>
          </li>

          <li>
            <label class="filter__label" for="name_desc">
              <span class="filter__pseudo-label">Od Z do A &nbsp;</span>
              <input class="filter__input" type="radio" id="name_desc" name="name_desc" value="name_desc" @click="setSortParam($event, 'name_desc')">
              <svg xmlns='http://www.w3.org/2000/svg' class="filter__icon" viewBox='0 0 512 512'><path d='M112 184l144 144 144-144'/></svg>    
            </label>
          </li>
        </ul>
    </div>

  <div class="filters__bubble filters__bubble--filter filter-options" style="display: none; transform: translateX(-163px);
">
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
    Kontakt z księgowym
    <ul>
      <li>
        <input type="radio" id="in_person" name="in_person" value="in_person" @click="setFilterContactMethod($event, 'in_person')">
        <label for="in_person">Osobiście</label>
      </li>
       <li>
        <input type="radio" id="remote" name="remote" value="remote" @click="setFilterContactMethod($event, 'remote')">
        <label for="remote">Telefonicznie/online</label>
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
  data() {
    return {
       visible: {
        sort: false,
        filter: false
      } 
    }
  },
  methods: {
    showSortOptions () {
     /*  const sortOptionsList = document.getElementsByClassName('sort__options')
      console.log(sortOptionsList)
      sortOptionsList.classList.toggle('hidden') */

    },
    showBubble(whichBubble) {
      //zażądać akcji stanu zmieniającej ustawienia
      return this.$store.dispatch('showSortBubble')
    },
    hideBubble(whichBubble) {
      return this.$store.dispatch('hideSortBubble')
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
      //let newAccountingMethod = accountingMethod;

      let newUrl = url[0] + '//' +url[2] + '/' + path[0] + '?'

      if(currentQuery.city) {
        newUrl += `&city=${currentQuery.city}`
      } 

      if(currentQuery.sort) {
        newUrl += `&sort=${currentQuery.sort}`
      } 
      
      newUrl += `&accounting=${accountingMethod}`

      if(currentQuery.contact) {
        newUrl += `&sort=${currentQuery.contact}`
      } 
      
      //if(currentQuery.page) {
        newUrl += `&page=1`
      //}
    
      window.location.href = newUrl;
    }, 
     setFilterContactMethod($event, contact) {
      console.log(contact);
      $event.target.setAttribute('checked','true');

      let url = window.location.href.split('/');
      let path = url[url.length-1].split('?')
      const currentQuery = this.$route.query;  
      //let newAccountingMethod = accountingMethod;

      let newUrl = url[0] + '//' +url[2] + '/' + path[0] + '?'

      if(currentQuery.city) {
        newUrl += `&city=${currentQuery.city}`
      } 

      if(currentQuery.sort) {
        newUrl += `&sort=${currentQuery.sort}`
      } 

      if(currentQuery.accounting) {
        newUrl += `&accounting=${currentQuery.accounting}`
      } 
      
      newUrl += `&contact=${contact}`
      
      //if(currentQuery.page) {
        newUrl += `&page=1`
      //} 
    
      window.location.href = newUrl;
    }, 
  },
   computed: {
      filtersVisibilitySettings() {
        return this.$store.getters.getFiltersVisibilitySettings;
      }
    },
  async created() {


  },
  mounted(){
    console.log('filters mounted')
    //this.setRadiosChecked();
    //console.log(this.visible.sort)
}
}
</script>
