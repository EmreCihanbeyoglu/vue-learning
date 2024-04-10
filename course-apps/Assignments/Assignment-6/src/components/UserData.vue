<template>
  <form @submit.prevent="submitForm">
    <div>
      <label>Name</label>
      <input type="text" v-model="typedName">
    </div>
    
    <div>
      <label>Age</label>
      <input type="number" v-model="typedAge">
    </div>
    <button>Update User</button>
  </form>

</template>

<script>
export default {
  name: "UserData.vue",
  emits: ['update-user'],
  data: () => {
    return {
      typedName: '',
      typedAge: 0
    }
  },
  methods: {
    submitForm() {
      this.$emit(
          'update-user',
          this.typedName,
          this.typedAge);
    }

  }
}
</script>

<style scoped>

</style>