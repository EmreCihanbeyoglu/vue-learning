<template>
  <BaseDialog>
    <template v-slot:header> Invalid input </template>
    <template #default>
      <p>title, description and link should be valid.</p>
    </template>
    <template v-slot:actions>
      <BaseButton @click="$emit('closeDialog')">OK</BaseButton>
    </template>
  </BaseDialog>
</template>

<script setup>
import { defineEmits } from "vue";
const emits = defineEmits(["closeDialog"]);
</script>
