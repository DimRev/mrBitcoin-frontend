<template>
  <section class="app">
    <AppHeader :user="user" :exchange-rate="exchangeRate" />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </section>
</template>

<script setup lang="ts">
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import { User, userService } from './services/userService.ts'
import { bitcoinService } from './services/bitcoinService.ts'
import { ref, onMounted } from 'vue'

const user = ref<User | null>(null)
const exchangeRate = ref<number | null>(null)

onMounted(() => {
  user.value = userService.getUser()
  loadExchangeRate()
})

async function loadExchangeRate() {
  exchangeRate.value = await bitcoinService.getRate()
}
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
