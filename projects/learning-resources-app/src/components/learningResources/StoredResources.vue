<template>
  <ul>
    <ResourceItem
      v-for="resource in ResourcesStore.getResources()"
      :id="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
      :key="resource.id"
    />
  </ul>
</template>

<script setup>
import ResourceItem from "./ResourceItem.vue";
import * as ResourcesStore from "../../store/resources";
</script>

<style scoped>
ul {
  margin: 0 auto;
  padding: 0;
  list-style: none;
  max-width: 40rem;
}
</style>
