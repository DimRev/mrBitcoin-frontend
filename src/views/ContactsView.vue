<template>
  <section class="contacts-section">
    <h2>Contacts</h2>
    <ContactFilter @submit-term="submitTerm" />
    <ContactList
      v-if="filteredContacts"
      :contacts="filteredContacts"
      @delete="deleteContact"
      @details="detailsContact" />
  </section>
</template>

<script setup lang="ts">
import ContactFilter from '../components/ContactFilter.vue'
import ContactList from '../components/ContactList.vue'
import router from '../router'

import { useContactsStore } from '../store/contactsStore'
import { storeToRefs } from 'pinia'

const contactStore = useContactsStore()
const { filteredContacts } = storeToRefs(contactStore)

function deleteContact(id: string) {
  contactStore.deleteContact(id)
}

function detailsContact(id: string) {
  router.push({ name: 'contact-details', params: { id } })
}

function submitTerm(term: string) {
  contactStore.setFilter({ term })
}
</script>
