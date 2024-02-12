<template>
  <header class="app-header">
    <div class="logo">Mr.Bitcoin</div>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'contact' }">Contacts</RouterLink>
      <RouterLink :to="{ name: 'stats' }">Stats</RouterLink>
    </nav>
    <div v-if="user">
      {{ user.name }}
      {{ exchangeRate ? exchangeRate : 'loading...' }}
    </div>
    <div v-else>Please login</div>
  </header>
</template>

<script setup lang="ts">
import { User } from '../services/userService'

defineProps<{
  user: User | null
  exchangeRate: number | null
}>()
</script>

<style lang="scss">
.app-header {
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 10px;
  }
}
</style>
