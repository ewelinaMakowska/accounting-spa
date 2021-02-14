<template>
  <div>
    <section>
      <div class="login__background">
   

            <div class="login__wrapper">
              

              <div class="login__box--top">
                <h1>Zaloguj się</h1>
                  <form
              novalidate
              class="login"
              @submit="login($event)">

                <div class="login__group">
                  <label for="form__email">E-mail</label>
                  <input
                  id="form__email"
                  v-model.trim="email"
                  name="email"
                  type="email"
                  placeholder="Twój adres e-mail"
                  autocomplete="off"
                  >
                </div>

                <div class="login__group">
                  <label for="form__email">Hasło</label>
                  <input
                  id="form__password"
                  v-model="password"
                  name="password"
                  type="password"
                  placeholder="Twoje hasło"
                  >
                </div>
               
                <input class="login-button"
                  type="submit"
                  value="Send"
                >
              </form>

              <div v-if="$v.$anyErrors">
                <p>Sprawdź poprawność wpowadzonych danych i spróbuj ponownie</p>
              </div>
            </div>
             

            
            
            <div class="login__box--bottom">
               <p class="login__text">
                Nie masz jeszcze konta? <br>
                <a class="login__register-link" href="/register">Zarejestruj się! -></a>
              </p>
            </div>
             </div>
            

            <!-- <user-profile-page :email='creds.email' :token='userToken'>
                        </user-profile-page> -->

      </div>
    </section>
  </div>
</template>

<script>
import AuthService from '../services/AuthService'
import { required, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: null,
      password: null,
      userToken: null,
    }
  }, // data
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  methods: {
    async login(e) {
      e.preventDefault()
      this.$v.$touch();

      if(!this.$v.$invalid) {
          const creds = {
            email: this.email,
            password: this.password
          }

          console.log(`E-mail: ${creds.email}`)
          console.log(`Password: ${creds.password}`)

          try {
            const response = await AuthService.login(creds)
            this.$store.dispatch('setTokenAction', response.data.token)
            this.$store.dispatch('setUserAction', response.data.user)
            this.userToken = response.data.token
            location.reload()
          } catch (err) {
            console.log(err)
          }
        }
      }
    }
  }
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
