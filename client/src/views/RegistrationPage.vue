<template>
    <div>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                      <b>Registration</b><br/><br/><br/>
                        <form @submit="register($event)" novalidate > <!-- method="post" -->
                            <label for="form__name">First Name:</label>
														<input id="form__first-name" name="firstName" type="text" v-model.trim="userData.firstName"/><br/><br/>

                            <label for="form__name">Last Name:</label>
														<input id="form__last-name" name="lastName" type="text" v-model.trim="userData.lastName"/><br/><br/>

                            <label for="form__email">E-mail:</label>
														<input id="form__email" name="eMail" type="email" v-model.trim="userData.eMail"/><br/><br/>

                            <label for="form__email">Password:</label>
														<input id="form__password" name="password" type="password" v-model="userData.password"/><br/><br/>

                            <label for="form__email">Confirm Password:</label>
														<input id="form__confirm-password" name="confirmPassword" type="password" v-model="userData.confirmPassword"/><br/><br/>
                          
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
      </div>
</template>

<script>

import AuthService from '../services/AuthService'

export default {
	data() {
		return {
			userData: {
				firstName: null,
				lastName: null,
				eMail: null,
				password: null,
				confirmPassword: null
				}
		}
	}, //data
	methods: {

		async register(e) {
			e.preventDefault();
			const userData = this.userData;

			console.log(`First Name: ${userData.firstName}`)
			console.log(`Last Name: ${userData.lastName}`)
			console.log(`E-mail: ${userData.eMail}`)
			console.log(`Password: ${userData.password}`)
			console.log(`Confirm Password: ${userData.confirmPassword}`)

			try {
					const response = await AuthService.registerUser(userData);
					this.$store.dispatch('setTokenAction', response.data.token); 
					this.$store.dispatch('setUserAction', response.data.user);
				} catch(err) {
					console.log(err);
			}


		}
	}
} //export default

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