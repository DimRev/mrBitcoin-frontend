<template>
  <section>
    <h3>Signup</h3>
    <button @click="onLogin">Login</button>
  </section>
</template>

<script setup lang="ts">
import { useUserStore } from '../store/userStore'

const userStore = useUserStore()

function onLogin() {
  userStore.loginUser()
}
</script>

<style scoped></style>
