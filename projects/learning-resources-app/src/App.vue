<template>
  <TheHeader></TheHeader>
  <TheResources></TheResources>
</template>

<script setup lang="ts">
import TheHeader from "./components/layouts/TheHeader.vue";
import TheResources from "./components/learningResources/TheResources.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  padding: 0;
}
</style>
