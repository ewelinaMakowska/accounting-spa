<template>
  <div class="container">
    <form @submit="addCompany($event)" novalidate>
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
                    @change="ledger=!ledger"
                     />
                    <label for="ledger">
                      Księga Przychodów i Rozchodów
                    </label>                 
                  </li>

                  <li>
                    <input 
                    type="checkbox"
                    id="lump-sum"
                    @change="lumpSum=!lumpSum"
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
                    checked
                    @change="remote=!remote"
                     />
                    <label for="remote">
                      Telefoniczny/on-line
                    </label>   
                  </li>
                  <li>
                    <input 
                    type="checkbox"
                    id="in-person"
                    @change="inPerson=!inPerson"
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
                    v-model.trim="email"
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

</template>

<style scoped>
</style>

<script>
import CompaniesService from '../services/CompaniesService'

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
        ledger: false,
        lumpSum: false,
        remote: true,
        inPerson: false
      }
    },
    methods: {
      async addCompany($event) {
        $event.preventDefault()

        const data = {
          name: this.name,
          city: this.city,
          cityId: this.cityId,
          price: this.price,
          description: this.description,
          email: this.email,
          additionalPoints: this.additionalPoints,
          ledger: this.ledger,
          lumpSum: this.lumpSum,
          inPerson: this.inPerson,
        }

        console.log(`name: ${data.name}, city name: ${data.city}, city id: ${data.cityId}, price: ${data.price}, description: ${data.description}, email: ${data.email}, additional info: ${data.additionalPoints}, ledger: ${data.ledger}, lump sum: ${data.lumpSum}, contatct in person : ${data.inPerson}`)

        try {
          const company = await CompaniesService.addCompany(data);
          console.log(company)
        } catch(err) {
          console.log(err)
        }
  

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
        $event.preventDefault();
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