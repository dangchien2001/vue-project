<template>
    <div class="combobox-container">
        <div class="input-container">
            <Input class="input"></Input>
            <div class="icon"></div>
        </div>
        <div class="dropdown-container">
            <div class="dropdown-item">abc</div>
            <div class="dropdown-item">abc</div>
            <div class="dropdown-item">abc</div>
            <div class="dropdown-item">abc</div>
        </div>
    </div>
</template>

<script>
import Input from "@/components/input/input.vue"

export default {
  name: "Combobox",
};
</script>

<style scoped>
.combobox-container {
    position: relative;
    height: 24px;
}

.input {
    width: calc(100% - 24px);
}

.dropdown-container {
    height: 72px;
    position: absolute;
    top: 24px;
    width: 100%;
    overflow-y: auto;
}

.dropdown-item {
    height: 24px;
    border-bottom: 1px solid black;
    padding: 0 5px;
}

</style>