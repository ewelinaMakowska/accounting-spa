<template>
  <div class="office-thumb">
    Biuro {{ name }} <br>
    ID: {{ id }} <br>
    Miasto: {{ city }} <br>
    Cena: {{ price }} <br>

   <router-link :to="'/office/' + office.id">
      więcej
    </router-link> 
  </div>
</template>

 <style lang="scss">
    .office-thumb {
        background: gray;
        height: 300px;
        width: 250px;
        margin: 15px;
    }
 </style>

<script>
export default {
  props: {
    office: Object,
    name: String,
    city: String,
    id: Number,
    price: Number
  }

}
</script>
