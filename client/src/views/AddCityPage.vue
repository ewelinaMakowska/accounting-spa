<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>Dodaj miasto</h1>
        
        <form class="form" @submit="addCity($event)">
          <input type="text" v-model.trim="City.name" /><br/>
          <input type="text" v-model.trim="City.region" /><br/>
          <input type="submit" value="Dodaj" />
        </form>

      </div>
    </div>
  </div>
</template>


<script>
import CitiesService from '../services/CitiesService'

  export default {
    data() {
      return {
        City: {
          name: '',
          region: ''
        }
      }
    },
    methods: {
      capitalizeFirstLetter(string) {
        //todo: capitalize first letters of city


        

      },
      addCity($event) {
        $event.preventDefault();

        const name = this.capitalizeFirstLetter(this.City.name)
        console.log(name)
        const region = this.City.region.toLowerCase();
        console.log(region)

        const City = {
          name: name,
          region: region
        }

      //  console.log(City.name, City.region)
         try {
          CitiesService.addCity(City)
        } catch(err) {
          console.log(err)
        } 
      }
    }
  }
</script>