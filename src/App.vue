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

import { useContactsStore } from './store/contactsStore.ts'
import { useBitcoinStore } from './store/bitcoinStore.ts'

import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from './store/userStore'

const contactsStore = useContactsStore()
const bitcoinStore = useBitcoinStore()
const userStore = useUserStore()

const { exchangeRate } = storeToRefs(bitcoinStore)
const { user } = storeToRefs(userStore)

onMounted(() => {
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
  justify-content: space-between;
  min-height: 100dvh;
}
main {
  flex: 1;
  display: grid;
  margin-block-start: 12px;
  @media (width < 480px) {
    grid-template-columns: 20px 1fr 20px;
  }
  @media (480px <= width < 768px) {
    grid-template-columns: 60px 1fr 60px;
  }
  @media (768px <= width <= 1200px) {
    grid-template-columns: 110px 1fr 110px;
  }
  @media (width > 1200px) {
    grid-template-columns: 1fr 980px 1fr;
  }
  & > * {
    grid-column: 2;
  }
}
</style>
