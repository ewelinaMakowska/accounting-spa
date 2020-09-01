<template>
    <div>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <b>LogIn</b><br/><br/><br/>
                        <form @submit="submitForm($event)" novalidate > <!-- method="post" -->
    
                            <label for="form__email">E-mail:</label>
                            <input id="form__email" name="email" type="email" v-model.trim="userData.email"/><br/><br/>

                            <label for="form__email">Password:</label>
                            <input id="form__password" name="password" type="password" v-model="userData.password"/><br/><br/>
                            
                            <input type="submit" value="Send" />
                        </form>
                        <br/>
                        Nie masz jeszcze konta? <br/>
                        <a href="/register" >Zarejestruj się!</a>
                    </div>
                </div>
            </div>
        </section>
      </div>
</template>

<script>
export default {
	data() {
		return {
			userData: {
			email: null,
			password: null
		}
		}
	}, //data
	methods: {

		async submitForm(e) {
			e.preventDefault();
			const userData = this.userData;

			console.log(`E-mail: ${userData.email}`)
			console.log(`Password: ${userData.password}`)

			//send request to the backend
			console.log('Login!');
	/* 		try {
					await AuthService.logIn(userData);
				} catch(err) {
					console.log(err);
			} */
		}
	}
}
</script>

<style scoped>

    input[type="text"],
    input[type="email"],
    input[type="password"] {
        border: 1px solid #333;
        margin-left: 20px;
    }

    input[type="submit"] {
        background: lightblue;
    }

</style>