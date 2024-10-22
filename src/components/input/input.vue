<template>
  <input type="text" class="template-input" />
</template>

<script>
export default {
  name: "Input",
};
</script>

<style scoped>
.template-input {
  height: 24px;
  border-radius: 2px;
  padding: 0;
  border: 1px solid black;
  padding: 0 5px;
  width: 100%;
}

.template-input:focus {
  outline: none;
}
</style>
