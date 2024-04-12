<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" ref="usernameInputbox"/>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="text" v-model.number="userAge"/>
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input id="interest-news" name="interest" type="checkbox" value="news" v-model="interest"/>
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" type="checkbox" value="tutorials" v-model="interest"/>
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" type="checkbox" value="nothing" v-model="interest"/>
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" type="radio" value="video" v-model="how"/>
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" value="blogs" v-model="how"/>
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" value="other" v-model="how"/>
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <input id="consent" type="checkbox" v-model="consent"/>
      <label for="consent">Agree to keep personal information</label>
    </div>

    <div class="form-control">
      <RatingControl :selectedRating="rating" @update-selected-rating="selectRating"/>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>


<script setup>
import RatingControl from './RatingControl.vue';
import { ref } from 'vue'
const usernameInputbox = ref();
const userAge = ref(null);
const referrer = ref('google');
const interest = ref([]);
const how = ref(null);
const consent = ref(false);
const rating = ref(null);

function selectRating(option) {
  console.log('I am in the select rating funrion in the parent');
  console.log(option)
  rating.value = option;
}

function submitForm() {
  // username
  console.log(usernameInputbox.value.value)
  usernameInputbox.value.value = '';

  // userAge
  console.log(userAge.value);
  console.log(typeof userAge.value)
  userAge.value = null;


  // dropdown
  console.log(referrer.value);
  referrer.value = 'google';

  // checkboxes
  console.log(interest.value);
  interest.value = [];

  // radio buttons
  console.log(how.value);
  how.value = null;

  // single checkbox
  console.log(consent.value); // prints true
  consent.value = false;


  // custom component
  console.log('custom component')
  console.log('sent rating value: ' + rating.value);
  rating.value = null;
}


</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>