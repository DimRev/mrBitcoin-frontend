import { defineStore } from 'pinia'
import { Contact, FilterBy, contactService } from '../services/contactService'

type ContactStoreState = {
  contacts: Contact[]
  selectedContact: Contact | null
  filterBy: FilterBy
}

export const useContactsStore = defineStore('contact', {
  state: (): ContactStoreState => {
    return {
      contacts: [],
      selectedContact: null,
      filterBy: { term: '' }
    }
  },
  getters: {
    filteredContacts(): Contact[] {
      let term = this.filterBy.term
      term = term.toLocaleLowerCase()
      return this.contacts.filter((contact) => {
        return (
          contact.name.toLocaleLowerCase().includes(term) ||
          contact.phone.toLocaleLowerCase().includes(term) ||
          contact.email.toLocaleLowerCase().includes(term)
        )
      })
    },
  },
  actions: {
    async setContacts() {
      const contacts = await contactService.getContacts()
      this.contacts = contacts
    },
    selectContact(id: string | null) {
      if (id === null) {
        this.selectedContact = null
        return
      }
      const selectedContact = this.contacts.find((contact) => contact._id === id)
      this.selectedContact = selectedContact ? selectedContact : null
    },
    deleteContact(id: string) {
      const idx = this.contacts.findIndex((contact) => {
        return contact._id === id
      })
      if (idx === -1) {
        console.error('Contact not found')
        return
      }
      this.contacts.splice(idx, 1)
    },
    setFilter(filterBy: FilterBy) {
      this.filterBy = filterBy
    }
  }
})