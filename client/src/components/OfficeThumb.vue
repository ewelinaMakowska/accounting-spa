<template>
  <div class="thumbs__thumb">
    <div class="thumb__top">
      <div class="top__left">
        <img src="assets/img/dummy-logo.svg" class="thumb__logo" alt="company logo" />
      </div>
      <div class="top__right">      
        <ul class="thumb__list">
          <li class="thumb__name">{{ name }}</li>
          <li class="thumb__city">{{ city }}</li>
          <li class="thumb__price">{{ price }}</li>
        </ul>
      </div>
    </div>

    <div class="thumb__bottom">
      <p class="thumb__description">{{ description }}</p>

   
    </div>

     <router-link :to="'/office/' + office.id" class="thumb__button">
        Więcej
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
