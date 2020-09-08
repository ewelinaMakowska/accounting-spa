<template>

    <div>

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                     <button @click="sendTestRequest($event)">Send Test Request</button>
                     <br/>
                     E-mail: {{ this.$props.email }} <br/>
                     Token: {{ this.$props.token }}
                    </div>
                </div>
            </div>
        </section>

      </div>
</template>

<script>

  import UserService from '@/services/UserService'

	export default {
		data() {
			return {
        creds : {
          email: this.$props.email,
          token: this.$props.token
        }
			}
			
    }, //data
     props: {
       email: String,
       token: String
     },
 
    methods: {
      async sendTestRequest(e) {
        e.preventDefault();
        try {
          const response = await UserService.getUserData(this.creds.token);
          console.log(response)
				} catch(err) {
					console.log(err);
                } 
      }
    }
  }
</script>

<style scoped>

   

</style>