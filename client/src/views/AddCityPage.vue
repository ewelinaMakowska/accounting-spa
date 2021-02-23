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
      addCity($event) {
        $event.preventDefault();
        const City = this.City;


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