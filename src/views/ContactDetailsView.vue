<template>
  <section v-if="selectedContact" class="contact">
    <div class="img-wrapper">
      <img :src="`https://robohash.org/${selectedContact.name}.png`" />
    </div>
    <h2>{{ selectedContact.name }}</h2>
    <h3>{{ selectedContact.email }}</h3>
    <h3>{{ selectedContact.phone }}</h3>
    <button @click="onBack">Back</button>
  </section>
  <section v-else>Loading...</section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useContactsStore } from '../store/contactsStore'
import { storeToRefs } from 'pinia'

const route = useRoute()
const router = useRouter()
const contactStore = useContactsStore()
const { selectedContact } = storeToRefs(contactStore)

onMounted(async () => {
  const id = route.params.id as string
  contactStore.selectContact(id)
})

function onBack() {
  contactStore.selectContact(null)
  router.push({ name: 'contact' })
}
</script>

<style scoped lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #aaa;
  border-radius: 8px;
  margin-block: 12px;
  padding-inline: 12px;
  .img-wrapper {
    width: 50%;
  }
}
</style>
