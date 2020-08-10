<template>
  <div>
    <button @click="showSortOptions()">Sortowanie</button>
    <ul class="sort__options">
      <li >Cena
        <ul class="price__options">
          <li><button @click="sortPriceAscending()">Najtańsze</button></li>
          <li>Najdroższe</li>
        </ul>
      </li> <!-- price -->
      <li>Nazwa
        <ul>
          <li>Od A do Z</li>
          <li>Od Z do A</li>
        </ul>
      </li> <!-- price -->
    </ul>
  </div>
</template>

<style lang="scss">
 .hidden { display: none; }
</style>

<script>
export default {
  methods: {
    showSortOptions() {
      let sortOptionsList = document.getElementsByClassName('sort__options');
      console.log(sortOptionsList);
      sortOptionsList.classList.toggle('hidden');
    },

    sortPriceAscending() {
      console.log('sort asc!');
    }
  }
}
</script>