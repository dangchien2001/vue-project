<script>
import Table from '@/components/table/table.vue';

export default {
  methods: {
    goToAbout() {
      this.$router.push('/about')
    },
  },
}
</script>

<template>
  <h2>HomeView</h2>
  <button @click="goToAbout">Go to About</button>
  <Table></Table>
</template>