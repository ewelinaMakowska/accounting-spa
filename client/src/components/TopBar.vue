<template>
   <div class="top-bar">

      <div class="container">
        <div class="row">
          <div class="col">

            <div class="top-bar__left">
              <img src="assets/img/dummy-logo.svg" class="top-bar__logo" />
              <p class="top-bar__company-name">Business Services</p>
            </div>


            <div class="top-bar__right">
              <ul class="top-bar__list">
                <li><a href="#" class="top-bar__link">Usługi</a></li>

                <li>
                  <a href="#" class="top-bar__link">Księgowi</a>
                </li>

                <li>
                  <router-link :to="'/login'" class="login-button top-bar__link" v-if="!$store.state.isUserLoggedIn">
                    Zaloguj się
                  </router-link>
                </li>

                <li> 
                  <button
                  v-if="$store.state.isUserLoggedIn"
                  @click="logout()"
                  >
                    Wyloguj
                  </button>
                </li>
              </ul>

            </div>

          </div>
        </div>
      </div>
      
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  name: 'TopBar',

  data () {
    return {
    }
  },


  methods: {
    logout() {
      this.$store.dispatch('setTokenAction', null)
      this.$store.dispatch('setUserAction', null)

      localStorage.removeItem('user')
      localStorage.removeItem('token')
      localStorage.removeItem('isUserLoggedIn')

      window.location.reload()

      // todo: remove token from local storage
    }
  } 

}// export default

</script>