<template>
    <div>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        Obiekt {{ company }} <br/>
                        Witaj na stronie biura: {{ company.name }} <br/>
                        Id biura to:  {{ company.id }} <br/> 
                        Miejscowość:  {{ company.city }} <br/> 
                        Cena za usługę to: {{ company.price }} <br/>
                        Adres mailowy biura {{ company.email }}
                    </div>
                </div>
            </div>
        </section>

         <section v-if="company.email" id="form">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <p>Contact us!</p>
                        <br/>
                        <form>
                            <label for="form__id">Your Name:</label><input id="form__id" type="text"/><br/>
                            <label for="form__email">Your E-mail:</label><input id="form__email" type="email"/><br/>
                            <label for="form__id">Your Message:</label><br/>
                            <textarea id="form__message"/><br/>
                            <input type="submit" value="Send" @click="submitForm()" />
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<style scoped>

    input[type="text"],
    input[type="email"] {
        border: 1px solid #333;
        margin-left: 20px;
    }

    textarea {
        border: 1px solid #333;
    }

</style>

<script>
//import CompaniesService from '@/services/CompaniesService'

export default {
        data() {
        return {
            company: {}
            }
    },
    // data() {
    //     return {
    //      ID: this.id 
    //     }
    // },
    computed: {   
        offices () {
            return this.$store.getters.loadedOffices;
        },
        singleCompany () {
            return this.$store.getters.loadedOffice;
        },
        }, //computed
        methods: {
          loadCompany(id) {
            return this.$store.dispatch('loadCompany', id);
        } ,
         loadCompanies() {
            return this.$store.dispatch('loadCompaniesAction');
        }, 
				sendForm() {
					console.log('Form sent!');
				}
        },
    

				async mounted() {
            console.log("Mounted");
            let id = this.$route.params.id; 
            console.log(id);
            try {
            // await this.loadCompany(id); 
            await this.loadCompany(id); 
             console.log('company loaded to the state');
            } catch (err) { console.log("fail")
            } finally {     
            this.company = this.offices;
            console.log(this.company)
             } //trycatch
        } //mounted
    
//    async created () {
//              console.log("Mounted");
//              const id = this.$route.params.this.id; 
//             try {
//              await CompaniesService.getOne(id);
//              console.log('company loaded to the state');
//             } catch (err) { console.log("fail")
//             } finally {
//              this.office;
//              console.log('state getter used');
//                  console.log(this.this.id);
//              } //trycatch
//         } //mounted     
    
    }
   // eslint-disable-line no-unused-vars 

    //przechować dane o id w cookie sesyjnym (?)
    

</script>