<template>
  <section>
    <ul>
      <li v-for="contact in contacts" :key="contact._id">
        <ContactPreview :contact="contact" />
        <div class="btns">
          <button @click="onDetails(contact._id)">Details</button>
          <button @click="onDelete(contact._id)">Delete</button>
        </div>
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
  margin-block: 12px;
  padding: 0;
  list-style-type: none;

  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background-color: #aaa;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.5);
  .btns {
    display: flex;
    justify-content: center;
    gap: 8px;
    button {
      cursor: pointer;
      padding-block: 8px;
      padding-inline: 12px;
      border-radius: 9999px;
      outline: none;
      border: none;

      &:hover {
        background-color: #ccc;
        transition: background-color 0.3s ease;
      }
    }
  }
}
</style>
