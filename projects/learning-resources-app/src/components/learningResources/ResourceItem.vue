<template>
  <li class="item-container">
    <BaseCard>
      <header>
        <h3>{{ props.title }}</h3>
        <BaseButton mode="flat" @click="deleteItem(id)">Delete</BaseButton>
      </header>
      <p>{{ props.description }}</p>
      <nav>
        <a href="props.link">View Resource</a>
      </nav>
    </BaseCard>
  </li>
</template>

<script setup>
import { defineProps } from "vue";
import { deleteResource } from "@/store/resources";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: true,
  },
});

const deleteItem = (id) => deleteResource(id);
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
