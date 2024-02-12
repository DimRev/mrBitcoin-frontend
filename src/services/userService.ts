type User = {
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
}

function getUser(): User {
  return user
}
