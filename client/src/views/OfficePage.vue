<template>
  <div>
<!--    Witaj na stronie biura: {{ office.name }} <br>
      Miejscowość:  {{ office.City.name }}, {{ office.City.region }} <br>
      Cena za usługę to: {{ office.price }} <br>
      Adres mailowy biura {{ office.email }}  <br/>

      Księga przychodów i rozchodów: {{ office.ledger }}   <br/>
      Ryczałt: {{ office.lump_sum }}   <br/>

      Kontakt telefoniczny/on-line: {{ office.remote }}   <br/>
      Kontakt osobisty: {{ office.in_person }}   <br/>
      Dodatkowe informacje: {{ office.additional_points }}   <br/>
-->

    <top-bar></top-bar>
    <section class="c-profile__info">
      <div class="container">
        <div class="row">
          <div class="col-lg-12" v-if="notLoading">

            <div class="row">
              <div class="col-lg-12">

                <div class="c-profile__title">
                  <img src="/assets/img/dummy-logo.svg" class="thumb__logo" alt="company logo" />
                  <div>
                    <h1>{{ office.name }}</h1>
                    <span>{{ office.City }}</span>
                  </div>
                  
                </div>

                <div class="c-profile__basic-data">
                  <div class="basic-data__description">
                    <p class="main-text">
                     {{ office.description }}
                    </p>
                  </div>

                  <div class="price-wrapper">
                    <div class="basic-data__price">
                      <p>Od &nbsp;<span>{{ office.price }}</span> &nbsp;zł/msc</p>
                      <button class="blue-button contact_us-button">Skontaktuj się z nami</button>
                    </div>
                  </div>
                </div>

                <div class="c-profile__flex-list">
                  <div class="flex-list__item">
                    <span>icon</span> 
                    <p class="main-text">
                      główny e-mail do kontaktu:<br/>
                      <span>email@email.com.pl</span>
                    </p>
                  </div>

                  <div class="flex-list__item">
                    <span>icon</span> 
                    <p class="main-text">
                      obsługiwane sposoby rozliczania:<br/>
                      <span v-if="office.ledger">Księga Przychodów i Rozchodów</span><br/>
                      <span v-if="office.lump_sum">Ryczałt</span>
                    </p>
                  </div>

                  <div class="flex-list__item">
                    <span>icon</span> 
                    <p class="main-text">
                      główny e-mail do kontaktu:<br/>
                      <span>email@email.com.pl</span>
                    </p>
                  </div>

                  <div class="flex-list__item">
                    <span>icon</span> 
                    <p class="main-text">
                      główny e-mail do kontaktu:<br/>
                      <span>email@email.com.pl</span>
                    </p>
                  </div>
              
                </div>
           
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section
      v-if="office.email"
      class="company-form"
      id="form"
      style="display: none;"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <p>Contact us!</p>
            <br>
            <form
              novalidate
              @submit="submitForm($event)"
            >
              <label for="form__name">Your Name:</label><input
                id="form__name"
                name="name"
                type="text"
              ><br>
              <label for="form__email">Your E-mail:</label><input
                id="form__email"
                name="email"
                type="email"
              ><br>
              <label for="form__message">Your Message:</label><br>
              <textarea id="form__message" /><br>
              <input
                type="submit"
                value="Send"
              >
            </form>
          </div>
        </div>
      </div>
    </section> 
  </div> 
</template>


<script>
import CompaniesService from '../services/CompaniesService'
import ContactService from '../services/ContactService'
import TopBar from '../components/TopBar.vue' 

export default {
  components: {
    TopBar
  },
  data() {
    return {
      notLoading: false
    }
  },
  computed: {
    office() {
      return this.$store.getters.loadedOffices
    },
    company() {
      return this.$store.getters.loadedOffices
    } 
  }, // methods

  async mounted() {
    console.log('Mounted')
    let id = this.rememberId();
 
     try {
      await this.loadCompany(id)
      console.log('company loaded to the state')
    } catch (err) {
      console.log('fail')
      console.log(err)
    } finally {
      console.log('company loaded')
} // trycatch */
  }, // computed
  methods: {
      rememberId() {
        let url = window.location.href;
        let params = url.split('/');
        let id = params[params.length-1];
        console.log(params);
        console.log(id);
        return id;
      },
      async loadCompany(id) {
        await this.$store.dispatch('loadCompany', id)
        .then(() => {
           this.notLoading = true;
           console.log('LOADED')
        })
        .catch(function (error) {
          console.log(error);
          this.notLoading = false;
        })
      },
    async submitForm(e) {
      e.preventDefault()

      const eMailData = {
        name: document.getElementById('form__name').value,
        email: document.getElementById('form__email').value,
        message: document.getElementById('form__message').value,
        company: this.company.email
      }

      console.log('Form submitted!')
      console.log(`Name: ${eMailData.name}`)
      console.log(`Mail: ${eMailData.email}`)
      console.log(`Message: ${eMailData.message}`)
      console.log(`Company e-mail: ${eMailData.company}`)

      try {
        await ContactService.mailCompany(eMailData)
      } catch (err) {
        console.log(err)
      }
    }

  } // mounted

  }

</script>
