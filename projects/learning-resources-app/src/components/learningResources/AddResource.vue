<template>
  <div>
    <BaseCard>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="title">Title</label>
          <input id="title" name="title" type="text" v-model="title" />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea
            id="description"
            name="description"
            type="text"
            v-model="description"
          ></textarea>
        </div>
        <div class="form-control">
          <label for="link">Link</label>
          <input id="link" name="link" type="text" v-model="link" />
        </div>
        <div class="form-control">
          <BaseButton type="submit">submit</BaseButton>
        </div>
      </form>
    </BaseCard>
    <TheInvalidInputDialog
      v-show="!inputIsValid"
      @close-dialog="toggleDialog"
    ></TheInvalidInputDialog>
  </div>
</template>

<script setup>
import { addResource } from "@/store/resources";
import TheInvalidInputDialog from "./TheInvalidInputDialog.vue";
import { ref } from "vue";

const title = ref("");
const description = ref("");
const link = ref("");
const inputIsValid = ref(true);

const toggleDialog = () => (inputIsValid.value = !inputIsValid.value);

const submitForm = () => {
  if (
    (title.value.trim() === "",
    description.value.trim() === "",
    link.value.trim() === "")
  ) {
    inputIsValid.value = false;
    return; // return without adding the resource
  }

  const resourceToBeAdded = {
    id: Date().toString(),
    title: title.value,
    description: description.value,
    link: link.value,
  };

  addResource(resourceToBeAdded);
  title.value = "";
  description.value = "";
  link.value = "";
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
