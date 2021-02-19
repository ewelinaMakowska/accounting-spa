<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1>Wyszukaj firmy:</h1>
            <input type="search" autocomplete="off" />
            <button>Szukaj</button>

          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1>Znalezione firmy:</h1>

            <div class="companies-list">
              <div class="companies-list__company">
                <div class="companies-list__id">
                  1
                </div>

                <div class="companies-list__name">
                  Nazwa firmy
                </div>

                <div class="companies-list__location">
                  Warszawa, mazowieckie
                </div>

                <div class="companies-list__buttons">
                  <button>Profil</button>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>


              <div class="companies-list__company">
                <div class="companies-list__id">
                  2
                </div>

                <div class="companies-list__name">
                  Nazwa innej firmy
                </div>

                <div class="companies-list__location">
                  Kraków, małopolskie
                </div>

                <div class="companies-list__buttons">
                  <button>Profil</button>
                  <button>Edytuj</button>
                  <button>Usuń</button>
                </div>
              </div>

            </div> <!-- /companies-list -->

    
                  
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  }, // data
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .companies-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    

    &__company {
      border-top: 1px solid grey;
      border-left: 1px solid grey;
      border-right: 1px solid grey;
      margin: 0;
      padding: 0;
      margin-top: -2px;

      &:last-child {
        border-bottom: 1px solid grey;
      }

      & > div {
        display: inline-block;
       border-right: 1px solid grey;
       padding: 7px 10px 5px 10px;

       &:last-child {
         border-right: none;
       }
      }
    }

    &__id {
      width: 5%;
      text-align: center;
      }
    

     &__name {
       width: 40%;
      }

    &__location {
      width: 30%;
      }

    &__buttons {
      //border-right: none !important;
      text-align: center;
      width: 23%;

      button {
        display: inline-block;
      }
      }
  }
</style>
