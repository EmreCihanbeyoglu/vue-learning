<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </section>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
  <section class="container">
    <h2>{{ newUser.name }}</h2>
    <h3>{{ newUser.age }}</h3>
  </section>
  <section class="container">
    <h2>Count: {{ count }}</h2>
    <button @click="incrementCount">Increment</button>
  </section>

  <section class="container">
    <h2>full name: {{ fullName }}</h2>
    <input type="text" v-model="firstname">
    <input type="text" v-model="lastname">
  </section>
  
  <section class="container">
    <h2>Count: {{ myCount }}</h2>
    <button @click="increaseCount">Increase count</button>
  </section>
</template>

<script setup>
  import { ref, reactive, isRef, isReactive, computed, watch } from 'vue';

  /**
   * ref object
   */
  const userName = ref('Emre Cihan');
  const age = ref(35);
  console.log(userName)

  const user = ref({
    name: "Mehmet",
    age: 5
  })


  setTimeout(function() {
    user.value.name = 'Yusuf',
    user.value.age = 7;
  },2000)

  /**
   *  reactive object 
   */

  const newUser = reactive({
    name: 'Sumeyye',
    age: 34
  })
  console.log(newUser)

  setTimeout(function() {
    newUser.name = 'Yusuf',
    newUser.age = 7;
  },2000)


  /* 
   * reactive utilities 
   */
  console.log(isRef(userName));
  console.log(isReactive(newUser))



  /**
   * methods
   */

  const count = ref(0);
  function incrementCount() {
    count.value++;
  }



  /**
   * computed option replacement
   */

  const firstname = ref('');
  const lastname = ref('');

  const fullName = computed(function() {
    return firstname.value + ' ' + lastname.value;
  })


  /**
   * watch 
   */

  const myCount = ref(0);
  function increaseCount() {
    myCount.value++;
  }

  watch(myCount, function(newCount, oldCount) {
    console.log(oldCount);
    console.log(newCount)
    if(newCount === 5) {
      alert('I am done');
      myCount.value = 0;
    }
  })


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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>