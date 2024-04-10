<template>
  <section>
    <h2>Users</h2>
    <div>
      <active-user
          :name="user.name"
          :age=user.age>
      </active-user>
    </div>
  </section>

  <section>
    <user-data @update-user="updateUserData"></user-data>
  </section>

</template>

<script>


  export default {
    name: "App.vue",
    data: () => {
      return {
        user: {
          name: "Emre Cihanbeyoglu",
          age: 35
        }
      }
    },
    methods: {
      updateUserData(newName, newAge) {
        console.log('here');
        console.log(newName);
        console.log(newAge)
        this.user.name = newName !== '' ? newName : this.name;
        this.user.age = newAge !== 0 ? +newAge : this.age;
        console.log(this.age);
        console.log(this.name)
      }
    }
  }
</script>

<style scoped>

</style>