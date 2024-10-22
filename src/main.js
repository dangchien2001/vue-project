import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import Table from "@/components/table/table.vue";
import HeaderTable from "@/components/table/header.vue";
import Input from "@/components/input/input.vue"
import Combobox from "@/components/combobox/combobox.vue"

createApp(App)
  .component("Table", Table)
  .component("HeaderTable", HeaderTable)
  .component("Input", Input)
  .component("Combobox", Combobox)
  .use(router)
  .mount("#app");
