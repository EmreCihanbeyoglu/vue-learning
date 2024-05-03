<template>
  <BaseCard class="tabs">
    <Basebutton v-for="(_, tab) in tabs" :key="tab" @click="currentTab = tab">
      {{ tab }}
    </Basebutton>
  </BaseCard>
  <KeepAlive>
    <component :is="tabs[currentTab]"></component>
  </KeepAlive>
</template>

<script setup>
import { ref } from "vue";
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";
import BaseCard from "../UI/BaseCard.vue";

const currentTab = ref("StoredResources");

const tabs = {
  StoredResources,
  AddResource,
};
</script>

<style scoped>
.tabs {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
