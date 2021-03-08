<template>
           
  <form
    novalidate
    @submit="submitForm($event)"
  >

    <p>Skontaktuj się z nami!</p>
    <br>

    <label for="form__name">Your Name:</label><input
      id="form__name"
      name="name"
      type="text"
    >
    <br>

    <label for="form__email">Your E-mail:</label><input
      id="form__email"
      name="email"
      type="email"
    >
    <br>

    <label for="form__message">Your Message:</label><br>

    <textarea id="form__message" /><br>
    
    <input
      type="submit"
      value="Send"
    >

  </form>
</template>


<script>
import ContactService from '../services/ContactService'

export default {
  props: {
    company: Object
  },

  methods: {
    async submitForm(e) {
      e.preventDefault()

      const eMailData = {
        name: document.getElementById('form__name').value,
        email: document.getElementById('form__email').value,
        message: document.getElementById('form__message').value,
        company: this.$props.company.email
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

  } 

  }

</script>
