<template>
  <div class="container">
    <form >
      <div class="row">
        <div class="col-lg-12">
          <h1>Dodaj firmę</h1>
          <div class="c-profile__title">
            <img src="/assets/img/dummy-logo.svg" class="thumb__logo" alt="company logo" />
            <div>
              <h2> 
                <input 
                type="text"
                placeholder="Nazwa firmy"/>
              </h2>

              <span class="c-profile__location">
                <input 
                type="text"
                placeholder="Miasto"/>,
                <input 
                type="text"
                placeholder="województwo"/>
              </span>                
            </div>
            
          </div>

          <div class="c-profile__basic-data">
            <div class="basic-data__description">
              <p class="main-text">
                <input 
                type="text"
                placeholder="Opis firmy"
                />
              </p>
            </div>

            <div class="price-wrapper">
              <div class="basic-data__price">
                <p>Od &nbsp;<span>
                  <input 
                  type="text"
                  placeholder="Cena"
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
  export default {
    data() {
      return {

      }
    },
  }
</script>