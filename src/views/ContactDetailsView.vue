<template>
  <section v-if="contact">
    <h2>{{ contact.name }}</h2>
    <h3>{{ contact.email }}</h3>
    <h3>{{ contact.phone }}</h3>
    <RouterLink :to="{ name: 'contact' }">Back</RouterLink>
  </section>
  <section v-else>Loading...</section>
</template>

<script setup lang="ts">
import { Contact, contactService } from '../services/contactService'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const contact = ref<Contact | null>(null)

onMounted(async () => {
  const id = route.params.id as string
  contact.value = await contactService.getContactById(id)
})
</script>
