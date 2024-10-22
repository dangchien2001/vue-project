<script>
import Table from "@/components/table/table.vue";
import Input from "@/components/input/input.vue";
import Combobox from "@/components/combobox/combobox.vue"

export default {
  methods: {
    goToAbout() {
      this.$router.push("/about");
    },
  },
};
</script>

<template>
  <h2>HomeView</h2>
  <button @click="goToAbout">Go to About</button>
  <Table></Table>
  <Input></Input>
  <Combobox></Combobox>
</template>
