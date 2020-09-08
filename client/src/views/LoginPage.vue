<template>
    <div>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <b>LogIn</b><br/><br/><br/>
                        <form @submit="login($event)" novalidate > <!-- method="post" -->
    
                            <label for="form__email">E-mail:</label>
                            <input id="form__email" name="email" type="email" v-model.trim="creds.email"/><br/><br/>

                            <label for="form__email">Password:</label>
                            <input id="form__password" name="password" type="password" v-model="creds.password"/><br/><br/>
                            
                            <input type="submit" value="Send" />
                        </form>
                        <br/>
                        Nie masz jeszcze konta? <br/>
                        <a href="/register" >Zarejestruj się!</a>

                        

                        <user-profile-page :email='creds.email' :token='userToken'></user-profile-page>

                    </div>
                </div>
            </div>
        </section>
      </div>
</template>

<script>
	import AuthService from '@/services/AuthService'
    import UserProfilePage from '@/views/UserProfilePage.vue'

	export default {
		data() {
			return {
				creds: {
					email: null,
					password: null
			},
					userToken: null
			}
        }, //data
        components: {
					UserProfilePage
        },
		methods: {

			async login(e) {
				e.preventDefault();
				const creds = this.creds;

				console.log(`E-mail: ${creds.email}`)
				console.log(`Password: ${creds.password}`)

				try {
					const response = await AuthService.login(creds);
					this.$store.dispatch('setTokenAction', response.data.token); 
					this.$store.dispatch('setUserAction', response.data.user)
					this.userToken = response.data.token;
				} catch(err) {
					console.log(err);
                } 
                
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