import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import Table from "@/components/table/table.vue";
import HeaderTable from "@/components/table/header.vue";
import 'bootstrap';

createApp(App)
  .component("Table", Table)
  .component("HeaderTable", HeaderTable)
  .use(router)
  .mount("#app");
