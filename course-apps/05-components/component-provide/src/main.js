import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import FirstLevelChild from "@/components/FirstLevelChild.vue";
import SecondLevelChild from "@/components/SecondLevelChild.vue";


const app = createApp(App);

app.component('first-level-child', FirstLevelChild);
app.component('second-level-child', SecondLevelChild);


app.mount('#app')
