<template>
  <Line id="my-chart-id" :options="options" :data="data" />
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)
import { Values } from '../services/bitcoinService'
import { computed } from 'vue'

const props = defineProps<{
  values: Values[]
  name: string
}>()

const xValues = computed(() => {
  return props.values.reduce((acc: string[], val) => {
    const date = new Date(Number(val.x + '000')).toString().substring(0, 15)
    acc.push(date)
    return acc
  }, [])
})

const yValues = computed(() => {
  return props.values.reduce((acc: number[], val) => {
    acc.push(val.y)
    return acc
  }, [])
})

const data = {
  labels: xValues.value,
  datasets: [
    {
      label: props.name,
      backgroundColor: '#f87979',
      data: yValues.value,
    },
  ],
}

const options = {
  responsive: true,
  // maintainAspectRatio: false,
}
</script>

<style scoped></style>
