<template>
 <!-- <div class="autocomplete__wrapper" > -->
    <div class="autocomplete">
      <ul class="cities-list">
        <li class="cities-list__item">Warszawa, mazowieckie</li>
        <li class="cities-list__item">Kraków, małopolskie</li>
        <li class="cities-list__item">Gdańsk, pomorskie</li>
      </ul>
    </div>
 <!--  </div> -->
</template>


<script>


export default {
    /*  props: {
      searching: Number
    } */

  
}
</script>

<style lang="scss" scoped>

.autocomplete {
  height: auto;
  background: #ffffff;
  width: 60%;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  border-bottom: 1px solid grey;

  &__wrapper {
    height: 100vh;
    width: 100vw;
  }
}

.cities-list {
  list-style: none;
  &__item {
    padding: 10px;
    transition: 0.3s;

    &:hover {
      background: lightblue;
      cursor: pointer;
    }
  }
}
</style>