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
      <button @click="onLogout">Logout</button>
    </div>
    <div v-else>
      <RouterLink :to="{ name: 'singup' }"><button>Login</button></RouterLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { User } from '../services/userService'
import { useUserStore } from '../store/userStore'

const userStore = useUserStore()

defineProps<{
  user: User | null
  exchangeRate: number | null
}>()

function onLogout() {
  userStore.logoutUser()
}
</script>

<style lang="scss">
.app-header {
  display: flex;
  justify-content: space-between;
  background-color: #777;
  padding-block: 12px;
  padding-inline: 8px;

  nav {
    display: flex;
    gap: 10px;
  }
}
</style>
