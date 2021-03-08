<template>
  <div>
    <top-bar></top-bar>
    <section class="c-profile__info">
      <div class="container">
        <div class="row">
          <div class="col-lg-12" v-if="(this.$route.query.edit =='false' || !this.$route.query.edit) && notLoading">
            <!-- v-if="this.$route.query.edit=='false'" -->
            <company-info :company="company" />            
          </div>
        </div>
      </div>
    </section>

    <!-- visible with param and if admin -->
    <!-- todo: form for editing company -->

    <section
      v-if="office.email"
      class="company-form"
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

    
    <!-- visible with param ?edit and if admin -->
    <section id="edit-company" v-if="this.$route.query.edit =='true' && notLoading">
      <edit-company :company="company" />
    </section>
  </div> 
</template>


<script>
import CompaniesService from '../services/CompaniesService'
import ContactService from '../services/ContactService'
import TopBar from '../components/TopBar.vue' 
import CompanyInfo from '../components/CompanyInfo.vue'
import EditCompany from '../components/EditCompany.vue'

export default {
  components: {
    TopBar,
    CompanyInfo,
    EditCompany
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
