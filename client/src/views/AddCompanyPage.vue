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
                />
                <!-- todo: autocomplete with no city? go to add city! -->
                <input 
                type="text"
                placeholder="województwo"
                v-model.trim="region"
                />
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
        additionalPoints: ''
      }
    },
    methods: {
      addCompany($event) {
        $event.preventDefault()

        const data = {
          name: this.name,
          city: this.city,
          region: this.region,
          price: this.price,
          description: this.description,
          email: this.email,
          additionalPoints: this.additionalPoints
        }

        console.log(data.name, data.city, data.region)

      }
    },
  }
</script>