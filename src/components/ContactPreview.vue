<template>
  <h3>{{ contact.name }}</h3>
  <h4>{{ contact.email }}</h4>
  <h4>{{ contact.phone }}</h4>
</template>

<script setup lang="ts">
import { Contact } from '../services/contactService'

defineProps<{
  contact: Contact
}>()
</script>

<style lang="scss">
h3 {
  font-size: 1.2em;
  font-weight: 700;
}
h4 {
  font-size: 1.125em;
  font-weight: 600;
  padding-inline-start: 1em;
}
</style>
