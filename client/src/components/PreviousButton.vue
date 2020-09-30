<template>
  <div class="button">
    <!-- <a :href="'/?page='+(this.currentPageNumber)" > prev </a>  -->
    <!-- <a :href="'/search/?page='+(this.currentPageNumber)+'&city='+this.$props.city" > prev </a> -->
    <a :href="'/search?city='+this.$props.city+'&sort='+this.$route.query.sort+'&page='+(this.currentPageNumber)"> prev </a>
  </div>
</template>

<!-- <style scoped>
.button {
  padding-right: 15px;
}
</style> -->

<script>

export default {
  props: {
    city: String
  },
  data () {
    return {
      currentPageNumber: null
    }
  },
  mounted () {
    this.findPreviousPageNumber()
  },
  methods: {
    findPreviousPageNumber () {
      if (this.$route.query.page >= 2) {
        return this.currentPageNumber = parseInt(this.$route.query.page) - 1
      } else {
        return this.currentPageNumber = 1
      }
    }
  } // mounted

}

</script>
