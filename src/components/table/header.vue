<template>
  <tr>
    <th v-for="item in listHeader" v-bind:style="{ width: item.width + 'px' }">
      {{ item.title }}
    </th>
  </tr>
</template>

<script>
import { ref } from "vue";

export default {
  props: {},
  setup(props) {
    const listHeader = ref([
      {
        title: "Mã tài sản",
        width: "50",
      },
      {
        title: "Tên tài sản",
        width: "150",
      },
      {
        title: "Nội dung",
        width: "350",
      },
    ]);

    return {
      listHeader,
    };
  },
};
</script>

<style scoped>
th {
  border: 1px solid #ddd;
  text-align: left;
}
</style>
