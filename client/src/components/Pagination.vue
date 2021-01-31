<template>
  <div class="pagination__wrapper">

    <ul class="pagination">
      <li class="pagination__button" v-for="(page) in pages" :key="page">
        1
      </li>
    </ul>

    <div>
      {{ pageCount }}
      {{ currentPage}}
      {{ searchParams }}
    </div>
    
  </div>
</template>

<!-- <style scoped>

</style> -->

<script>

export default {
  props: {
    searchParams: Object
  },
  data() {
    return {
      pages : [1,2],
      currentPage: null,
      numberOfPages : null
    }
  },


  methods: {
  },

  computed: {
    pageCount() {
      return Math.round((this.$store.getters.countValue) / 2)
    },

  
  },
    async mounted() {
      console.log('pagination mounted')
      console.log(this.currentPage);
    }
}
</script>
