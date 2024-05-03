import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";

const app = createApp(App);
app
  .component("BaseCard", BaseCard)
  .component("BaseButton", BaseButton)
  .component("BaseDialog", BaseDialog);
app.mount("#app");
