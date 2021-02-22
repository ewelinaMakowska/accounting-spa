<template>
  <div class="container">
    <form @submit="addCompany($event)">
      <div class="row">
        <div class="col-lg-12">
          <h1>Dodaj firmę</h1>
          <div class="c-profile__title">
            <img src="/assets/img/dummy-logo.svg" class="thumb__logo" alt="company logo" />
            <div>
              <h2> 
                <input 
                type="text"
                placeholder="Nazwa firmy"
                v-model.trim="name"
                />              
              </h2>

              <span class="c-profile__location">
                <input 
                type="search"
                placeholder="Miasto"
                v-model.trim="city"
                @keyup="loadCitiesFilteredLimited($event)"
                @focus="setSearching()"
            
                id="city-input"
                autocomplete="off"
                />

                 <div class="autocomplete__wrapper" tabindex="0" id="autocomplete-wrapper" 
                 style="opacity: 0">
                  <div class="autocomplete">
                    <ul class="autocomplete__list">
                      <li
                        v-for="(city, id) in cities"
                        :key="id"
                      >
                        <button
                          class="autocomplete_button"
                          @click="autocompleteInput($event)"
                        >                        
                           {{ city.name }}, {{ city.region }}
                          <span class="cityid" style="display:none;">{{city.id}}</span>
                        </button>
                      </li>
                    </ul>
                    <router-link to='add-city'>Dodaj miasto</router-link>
                  </div> <!--div autocomplete -->
                </div> <!-- /autocomplete wrapper -->

              </span>                
            </div>
            
          </div>

          <div class="c-profile__basic-data">
            <div class="basic-data__description">
              <p class="main-text">
                <input 
                type="text"
                placeholder="Opis firmy"
                v-model.trim="description"
                />
              </p>
            </div>

            <div class="price-wrapper">
              <div class="basic-data__price">
                <p>Od &nbsp;<span>
                  <input 
                  type="text"
                  placeholder="Cena"
                  v-model.trim="price"
                  />
                </span> &nbsp;zł/msc</p>
                <input 
                type="submit" 
                value="Dodaj"
                class="blue-button contact_us-button">
              </div>
            </div>
          </div>

          <div class="c-profile__flex-list">
            <div class="flex-list__item">                   
              <i class="material-icons-sharp checkmark">done</i>
              <p class="main-text">
                obsługiwane sposoby rozliczania:<br/>
              </p>
                <ul class="sublist">
                  <li >
                    <input 
                    type="checkbox"
                    id="ledger"
                    value="ledger"
                     />
                    <label for="ledger">
                      Księga Przychodów i Rozchodów
                    </label>                 
                  </li>

                  <li>
                    <input 
                    type="checkbox"
                    id="lump-sum"
                    value="lump_sum"
                     />
                    <label for="ledger">
                      Ryczałt
                    </label>    
                  </li>
                </ul>
            </div>

            <div class="flex-list__item">                   
              <i class="material-icons-sharp checkmark">done</i>
              <p class="main-text">
                kontakt z księgowym:<br/>
              </p>
                <ul class="sublist">
                  <li >
                    <input 
                    type="checkbox"
                    id="remote"
                    value="remote"
                     />
                    <label for="remote">
                      Telefoniczny/on-line
                    </label>   
                  </li>
                  <li>
                    <input 
                    type="checkbox"
                    id="in-person"
                    value="in_person"
                     />
                    <label for="inperson">
                      Osobisty
                    </label>   
                  </li>
                </ul>
            </div>

            <div class="flex-list__item">                   
              <i class="material-icons-sharp checkmark">done</i>
              <p class="main-text">
                adres e-mail:<br/>
              </p>
                <ul class="sublist">
                  <li>
                    <input 
                    type="email"
                    placeholder="Adres mailowy firmy"
                    />
                    </li>
                </ul>
            </div>


            <div class="flex-list__item">                   
              <i class="material-icons-sharp checkmark">done</i>
              <p class="main-text">
                <input 
                  type="text"
                  placeholder="Dodatkowe informacje"
                  v-model.trim="additionalPoints"
                  />
                <br/>
              </p>
            </div>

          </div>

        </div>
      </div>
      </form>
    </div>

    <!-- to do add if no city form add city in a separate component -->
</template>

<style scoped>
</style>

<script>
  export default {
    data() {
      return {
        name: '',
        city: '',
        region: '',
        price: '',
        description: '',
        email: '',
        additionalPoints: '',
        cityname: '',
        cityId: '',
        searching: false
      }
    },
    methods: {
      addCompany($event) {
        $event.preventDefault()

        const data = {
          name: this.name,
          city: this.city,
          cityId: this.cityId,
          region: this.region,
          price: this.price,
          description: this.description,
          email: this.email,
          additionalPoints: this.additionalPoints
        }

        console.log(data.name, data.city, data.cityId)

      },
       setSearching(){
        this.searching = 1;
        console.log('set searching true')
      },

      setSearchingFalse(){
        setTimeout(() => {
          this.searching = 0;
          console.log('set searching false')
        }, 500)
      },

      async loadCities () {
        await this.$store.dispatch('loadCities')
          .catch(function (error) {
            console.log(error)
          })
        console.log(this.$store.getters.state.cities.citiesList)
      },

    //handler of a button with city name - ads cityid to url
      async autocompleteInput ($event) {
        const cityID = $event.target.childNodes[1].innerText;
        const cityName = $event.target.innerText;
        const searchInput = document.getElementById('city-input');


        console.log($event.target)
        console.log('')
        console.log('')
        console.log(cityID)
        console.log(cityName)

        searchInput.value = cityName;
        this.city = cityName;
        this.cityId = $event.target.querySelector('.cityid').innerText;

        document.getElementById('autocomplete-wrapper').style.opacity = 0
        document.getElementById('autocomplete-wrapper').style.height = 0;
        document.getElementById('autocomplete-wrapper').style.overflow = 'hidden';

    

        
         // this.searching = false
       

    /*     this.$router.push({ path: 'search', query: { city: cityID, page: 1}})
        window.location.reload(); */

      // await this.searchResults()
       // document.getElementsByClassName('autocomplete')[0].classList.add('hidden')
      },

    //gets list of cities and shows it
      async loadCitiesFilteredLimited($event) {
        const name = document.getElementById('city-input').value;
        console.log(`name: ${name}`)

        await this.$store.dispatch('loadCitiesFilteredLimited', name)
          .catch(function (error) {
            console.log(error)
          })

        if ($event.target.value!=''){
          //this.searching = 1 
          document.getElementById('autocomplete-wrapper').style.opacity = 1;
          document.getElementById('autocomplete-wrapper').style.height = 'auto';

        } else {
          document.getElementById('autocomplete-wrapper').style.opacity = 0;
          document.getElementById('autocomplete-wrapper').style.height = 0;



        }
      },
    },
    computed: {
      cities() {
        return this.$store.getters.loadedCities
      }
    },
    update() {

    }
  }
</script>