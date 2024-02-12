<template>
  <section class="contacts-section">
    <h2>Contacts</h2>
    <ContactList v-if="contacts" :contacts="contacts" />
  </section>
</template>

<script setup lang="ts">
import ContactList from '../components/ContactList.vue'
import {
  Contact,
  FilterBy,
  contactService,
} from '../services/contactService.ts'
import { onMounted, ref } from 'vue'

const contacts = ref<Contact[] | null>(null)
const filter = ref<FilterBy>({ term: '' })

onMounted(async () => {
  contacts.value = await contactService.getContacts(filter.value)
})
</script>
