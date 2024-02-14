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

import { useContactsStore } from './store/contactsStore.ts'
import { useBitcoinStore } from './store/bitcoinStore.ts'

import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const contactsStore = useContactsStore()
const bitcoinStore = useBitcoinStore()

const { exchangeRate } = storeToRefs(bitcoinStore)
const user = ref<User | null>(null)

onMounted(() => {
  user.value = userService.getUser()

  contactsStore.setContacts()

  bitcoinStore.setExchangeRate()
  bitcoinStore.setAvgBlockSize()
  bitcoinStore.setMarketPriceHistory()
})
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
