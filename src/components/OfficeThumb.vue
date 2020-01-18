<template>
<div class="office-thumb">
    Biuro {{ name }} <br/>
    ID:
     <router-link to="/office">więcej</router-link>
</div>
</template>

<style scoped>
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
        name: String,
        id: String
    }
}
</script>