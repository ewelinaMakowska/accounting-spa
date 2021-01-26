<template>
  <div id="autocomplete__wrapper">
    <div class="autocomplete">
      <ul class="cities-list">
     
      </ul>
    </div>
    <div
      class="outside"
      @click="hideAutocomplete()"
    />
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

<!-- <style lang="scss" scoped>

.hidden {
  display: none;
}
.outside {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.5);
  z-index: -9;
}

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
  z-index: 5;

  &__item {
    padding: 10px;
    transition: 0.3s;

    &:hover {
      background: lightblue;
      cursor: pointer;
    }
  }
}
</style> -->
