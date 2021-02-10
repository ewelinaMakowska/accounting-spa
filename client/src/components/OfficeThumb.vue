<template>
  <div class="thumbs__thumb">
    <div class="thumb__top">
      <div class="top__left">
        <img src="assets/img/dummy-logo.svg" class="thumb__logo" alt="company logo" />
      </div>
      <div class="top__right">      
        <ul>
          <li class="thumb__name">{{ name }}</li>
          <li class="thumb__city">{{ city }}</li>
          <li class="thumb__price">{{ price }}</li>
        </ul>
      </div>
    </div>

    <div class="thumb__bottom">
      <p>{{ description }}</p>
    </div>
  <!--   Biuro {{ name }} <br>
    ID: {{ id }} <br>
    Miasto: {{ city }} <br>
    Cena: {{ price }} <br> -->

   <router-link :to="'/office/' + office.id">
      więcej
    </router-link> 
  </div>
</template>



<script>
  export default {
    props: {
      office: Object,
      name: String,
      city: String,
      description: String,
      id: Number,
      price: Number
    }
  }
</script>
