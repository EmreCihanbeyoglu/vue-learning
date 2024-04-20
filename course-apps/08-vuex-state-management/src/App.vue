<template>
  <base-container title="Vuex">
    <h3>{{ $store.state.count }}</h3>
    <button @click="addOne">Add 1</button>
    <button @click="addTwo">Add 2</button>
    <button @click="addGivenAmount">Add 10</button>
    <button @click="addGivenAmountWithinObjectPayload">Add 10</button>
    <button @click="addGivenAmountWithDelay">Add with delay</button>
  </base-container>
</template>

<script setup>
import BaseContainer from './components/BaseContainer.vue';

import {useStore} from 'vuex';
const store = useStore();

// without mutations
const addOne = () => {
  store.state.count++;
}

// with mutations
const addTwo = () => {
  store.commit('increment');
}

// with mutations with extra value payload
const addGivenAmount = () => {
  store.commit('increase', 10)
}

// with mutations with extra object payload
const addGivenAmountWithinObjectPayload = () => {
  store.commit('increaseWithObjectPayload', {value: 10})
}

// with actions
const addGivenAmountWithDelay = () => {
  store.dispatch('increase', 5);
}


</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>