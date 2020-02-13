<template>
<div class="office-thumb">
    Biuro {{ name }} <br/>
    ID: {{ id }} <br/>
    
     <router-link :to="'/office/' + office.id">więcej</router-link>
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
        office: Object,
        name: String,
        id: Number
    }
    
}
</script>