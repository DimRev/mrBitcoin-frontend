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
