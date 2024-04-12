<template>
    <ul>
        <li :class="{active: selectedRating === 'Poor'}"><button type="button" @click="selectRating('Poor')">Poor</button></li>
        <li :class="{active: selectedRating === 'Average'}"><button type="button" @click="selectRating('Average')">Average</button></li>
        <li :class="{active: selectedRating === 'Good'}"><button type="button" @click="selectRating('Good')">Good</button></li>
    </ul>
</template>

<script setup>

import { ref, defineProps, defineEmits } from 'vue'
//const selectedRating = ref(null);
const props = defineProps(['selectedRating'])

const emits = defineEmits(['update-selected-rating']);

function selectRating(option) {
    console.log('in the child, option is: ' + option)
    emits('update-selected-rating', option);
}



</script>

<style scoped> 
ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin: 2rem auto;
}

li {
    border: 1px solid black;
    display: flex;
    height: 5rem;
    align-items: center;
    width: 30%;
    justify-content: center;
}

button {
    border: none;
    background-color: transparent;
    padding: 0;
    margin:0;
    width:100%;
    height: 100%;
}

.active {
    border: 2px solid red;
}

.active button{
    background-color: red;
    color:white
}


</style>