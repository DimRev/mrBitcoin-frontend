import { defineStore } from 'pinia'
import { ApiResponse, Values, bitcoinService } from '../services/bitcoinService'

type BitcoinStoreState = {
  exchangeRate: number | null,
  marketPriceHistory: ApiResponse | null,
  avgBlockSize: ApiResponse | null,
}

export const useBitcoinStore = defineStore('bitcoin', {
  state: (): BitcoinStoreState => {
    return {
      exchangeRate: null,
      marketPriceHistory: null,
      avgBlockSize: null,
    }
  },
  getters: {
    marketPriceHistoryValues(): Values[] {
      if (!this.marketPriceHistory) return []
      return this.marketPriceHistory.values
    },
    marketPriceHistoryName(): string {
      if (!this.marketPriceHistory) return ''
      return this.marketPriceHistory.name
    },
    avgBlockSizeValues(): Values[] {
      if (!this.avgBlockSize) return []
      return this.avgBlockSize.values
    },
    avgBlockSizeName(): string {
      if (!this.avgBlockSize) return ''
      return this.avgBlockSize.name
    },
  },
  actions: {
    async setExchangeRate() {
      const exchangeRate = await bitcoinService.getRate()
      this.exchangeRate = exchangeRate
    },
    async setMarketPriceHistory() {
      const marketPriceHistory = await bitcoinService.getMarketPriceHistory()
      this.marketPriceHistory = marketPriceHistory
    },
    async setAvgBlockSize() {
      const avgBlockSize = await bitcoinService.getAvgBlockSize()
      this.avgBlockSize = avgBlockSize
    }
  }
})