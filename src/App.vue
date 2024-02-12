<template>
  <section class="app">
    <AppHeader />
    <main></main>
    <AppFooter />
  </section>
</template>

<script setup lang="ts">
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  justify-content: space-between;
}
main {
  flex: 1;
}
</style>
