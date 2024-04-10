<script>

  export default {
    data: () => {
      return {
        name: "Emre Cihan"
      }
    },
    provide() {
      return {
        'myName': this.name
      }
    }
  }
</script>

<template>

  <first-level-child></first-level-child>
</template>

