<template>
  <div class="img-wrapper">
    <img :src="`https://robohash.org/${contact.name}.png`" />
  </div>
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
.img-wrapper {
  padding: 24px;
  display: flex;
  justify-content: center;
  img {
    width: 77%;
    border: 1px solid #cccccc11;
    border-radius: 8px;
    background-color: #ccc;
    box-shadow: inset 1px 1px 3px 2px rgba(0, 0, 0, 0.5);
  }
}
</style>
