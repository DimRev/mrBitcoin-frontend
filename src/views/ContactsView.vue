<template>
  <section class="contacts-section">
    <h2>Contacts</h2>
    <ContactFilter @submit-term="submitTerm" />
    <ContactList
      v-if="contacts"
      :contacts="contacts"
      @delete="deleteContact"
      @details="detailsContact" />
  </section>
</template>

<script setup lang="ts">
import ContactFilter from '../components/ContactFilter.vue'
import ContactList from '../components/ContactList.vue'
import router from '../router'
import {
  Contact,
  FilterBy,
  contactService,
} from '../services/contactService.ts'

import { onMounted, ref } from 'vue'

const contacts = ref<Contact[] | null>(null)
const filter = ref<FilterBy>({ term: '' })

onMounted(() => {
  loadContacts()
})

async function loadContacts() {
  contacts.value = await contactService.getContacts(filter.value)
}

function deleteContact(id: string) {
  if (!contacts.value) {
    console.error('No contacts available')
    return
  }
  const idx = contacts.value.findIndex((contact) => {
    return contact._id === id
  })
  if (idx === -1) {
    console.error('Contact not found')
    return
  }
  contacts.value.splice(idx, 1)
}

function detailsContact(id: string) {
  router.push({ name: 'contact-details', params: { id } })
}

async function submitTerm(term: string) {
  filter.value.term = term
  loadContacts()
}
</script>
