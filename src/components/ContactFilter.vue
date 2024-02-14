<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="text" />
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'submit-term', term: string): void
}>()
const text = ref<string>('')
function onSubmit() {
  emit('submit-term', text.value)
}
</script>

<style scoped lang="scss">
form {
  display: flex;
  justify-content: center;
  input {
    width: 70%;
    padding-inline: 12px;
    padding-block: 8px;
    border-radius: 9999px;
    outline: none;
  }
}
</style>
