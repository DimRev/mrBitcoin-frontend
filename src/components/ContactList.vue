<template>
  <section>
    <ul>
      <li v-for="contact in contacts" :key="contact._id">
        <ContactPreview :contact="contact" />
        <button @click="onDetails(contact._id)">Details</button>
        <button @click="onDelete(contact._id)">Delete</button>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { Contact } from '../services/contactService'
import ContactPreview from './ContactPreview.vue'

defineProps<{
  contacts: Contact[]
}>()
const emit = defineEmits<{
  (e: 'delete', id: string): void
  (e: 'details', id: string): void
}>()

function onDelete(id: string) {
  emit('delete', id)
}
function onDetails(id: string) {
  emit('details', id)
}
</script>

<style lang="scss">
ul {
  margin-bottom: 12px;
  padding: 0;
  list-style-type: none;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
li {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
</style>
