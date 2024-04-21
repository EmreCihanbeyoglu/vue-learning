<script setup>
  import { useStore } from 'vuex';
  const store = useStore();
  console.log(store);
</script>

<template>
  <h2>{{ store.getters["student/getStudent"] }}</h2>
  <h2>{{ store.getters["teacher/getTeacher"] }}</h2>
  <h2>{{ store.getters["teacher/getTeacherSchool"]}}</h2>
</template>

<style scoped>

</style>