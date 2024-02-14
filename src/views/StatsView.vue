<template>
  <section class="stats-section">
    <div class="chart">
      <LineChart :values="avgBlockSizeValues" :name="avgBlockSizeName" />
    </div>
    <div class="chart">
      <LineChart
        :values="marketPriceHistoryValues"
        :name="marketPriceHistoryName" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBitcoinStore } from '../store/bitcoinStore'
import LineChart from '../components/LineChart.vue'

const bitcoinStore = useBitcoinStore()
const {
  avgBlockSizeName,
  avgBlockSizeValues,
  marketPriceHistoryName,
  marketPriceHistoryValues,
} = storeToRefs(bitcoinStore)
</script>

<style scoped lang="scss">
.stats-section {
  display: flex;
  justify-content: center;
  align-items: center;
  .chart {
    flex: 1;
  }
}
</style>
