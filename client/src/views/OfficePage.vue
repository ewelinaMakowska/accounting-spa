<template>
<div> elo </div>
  <!-- <div>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            Obiekt {{ company }} <br>
            Witaj na stronie biura: {{ company.name }} <br>
            Id biura to:  {{ company.id }} <br>
            Miejscowość:  {{ company.city }} <br>
            Cena za usługę to: {{ company.price }} <br>
            Adres mailowy biura {{ company.email }}
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="company.email"
      id="form"
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
  </div> -->
</template>



<script>
import CompaniesService from '../services/CompaniesService'
import ContactService from '../services/ContactService'

export default {
  data() {
    return {
      company : {}
    }
  },
  computed: {
    
  }, // methods

  async mounted() {
    console.log('Mounted')
    console.log(this.$route.params)
    let id = this.$route.params.id
    console.log(this.id)
     try {
      await this.loadCompany(id)
      console.log('company loaded to the state')
    } catch (err) {
      console.log('fail')
      console.log(err)
    } finally {
      this.company = this.offices
    } // trycatch */
  }, // computed
  methods: {
      loadCompany(id) {
        return this.$store.dispatch('loadCompany', id)
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
