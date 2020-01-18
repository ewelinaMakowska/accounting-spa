

<template>


<v-container class="main-container">
    <v-row>
        <v-col lg="12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </v-col>
    </v-row>


    <v-row>
        <v-col lg="12">
            lista biur księgowych 

            <v-row>
                 <v-col lg="4">
                     wyszukiwarka
                      </v-col>

                      <v-col lg="8">
                          biura:
                     <div class="flex-thumbs-container">
                        <div class="office-thumb">sdfsfsfd</div>
                        <div class="office-thumb">sdfsfsfd</div>
                        <div class="office-thumb">sdfsfsfd</div>
                        <div class="office-thumb">sdfsfsfd</div>
                     </div>
                     paginacja
                      </v-col>

            </v-row>

        </v-col>
    </v-row>
</v-container>


</template>

<style>
* {
    font-family: 'Roboto', sans-serif;
}

.main-container {
    margin: 30px auto;
}

.flex-thumbs-container {
display: flex;
flex-wrap: wrap;
padding: 20px;
}

.office-thumb {
background: gray;
height: 300px;
width: 250px;
margin: 15px;
}

</style>

<script>
export default {
    
}
</script>