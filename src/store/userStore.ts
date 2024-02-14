import { defineStore } from 'pinia'
import { User, userService } from '../services/userService'

type UserStoreState = {
  user: User | null
}

export const useUserStore = defineStore('user', {
  state: (): UserStoreState => {
    return {
      user: null
    }
  },
  getters: {

  },
  actions: {
    loginUser() {
      this.user = userService.getUser()
    },
    logoutUser() {
      this.user = null
    }
  }
})