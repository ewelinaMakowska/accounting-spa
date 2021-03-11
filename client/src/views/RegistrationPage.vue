<template>
  <div class="reg-background">    


            <div class="reg-box">
              <div class="reg-box__left">
                <!--  <img src="/assets/img/buildings.jpg" alt="img" class="reg-box__img"/> -->
              </div>

              <div class="reg-box__right">
                formularz
              </div>
            </div>


         <!--    <b>Registration</b><br><br><br>

            <form
              novalidate
              @submit="register($event)"
            >
              <label for="form__name">First Name:</label>
              <input
                id="form__first-name"
                v-model.trim="userData.firstName"
                name="firstName"
                type="text"
              ><br><br>

              <label for="form__name">Last Name:</label>
              <input
                id="form__last-name"
                v-model.trim="userData.lastName"
                name="lastName"
                type="text"
              ><br><br>

              <label for="form__email">E-mail:</label>
              <input
                id="form__email"
                v-model.trim="userData.eMail"
                name="eMail"
                type="email"
              ><br><br>

              <label for="form__email">Password:</label>
              <input
                id="form__password"
                v-model="userData.password"
                name="password"
                type="password"
              ><br><br>

              <label for="form__email">Confirm Password:</label>
              <input
                id="form__confirm-password"
                v-model="userData.confirmPassword"
                name="confirmPassword"
                type="password"
              ><br><br>

              <input
                type="submit"
                value="Send"
              >
            </form> -->

   
  </div>
</template>

<script>

import AuthService from '../services/AuthService'

export default {
  data () {
    return {
      userData: {
        firstName: null,
        lastName: null,
        eMail: null,
        password: null,
        confirmPassword: null
      }
    }
  }, // data
  methods: {

    async register (e) {
      e.preventDefault()
      const userData = this.userData

      console.log(`First Name: ${userData.firstName}`)
      console.log(`Last Name: ${userData.lastName}`)
      console.log(`E-mail: ${userData.eMail}`)
      console.log(`Password: ${userData.password}`)
      console.log(`Confirm Password: ${userData.confirmPassword}`)

      try {
        const response = await AuthService.registerUser(userData)
        this.$store.dispatch('setTokenAction', response.data.token)
        this.$store.dispatch('setUserAction', response.data.user)
      } catch (err) {
        console.log(err)
      }
    }
  }
} // export default

</script>

<!-- <style scoped>

    input[type="text"],
    input[type="email"],
    input[type="password"] {
        border: 1px solid #333;
        margin-left: 20px;
    }

    input[type="submit"] {
        background: lightblue;
    }

</style> -->
