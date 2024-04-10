<template>
  <h2>{{name}}</h2>
  <h3>{{age}}</h3>
</template>

<script>
export default {
  name: "ActiveUser.vue",
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  },
}
</script>

<style scoped>

</style>