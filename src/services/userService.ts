export type User = {
  name: string,
  balance: number,
  transactions: number[]
}

const user: User = {
  name: 'Puki Ben David',
  balance: 100,
  transactions: [],
}

export const userService = {
  getUser,
  transferFunds,
  getTransactions,
}

function getUser(): User {
  return user
}

function transferFunds() {

}

function getTransactions() {

}
