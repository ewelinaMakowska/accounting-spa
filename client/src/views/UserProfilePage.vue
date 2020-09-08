<template>

    <div>

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                     <button @click="sendTestRequest($event)">Send Test Request</button>
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
          email: 'eressea@op.pl'
        }
			}
			
		}, //data
    methods: {
      async sendTestRequest(e) {
        e.preventDefault();
        try {
          const response = await UserService.getUserData(this.creds);
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