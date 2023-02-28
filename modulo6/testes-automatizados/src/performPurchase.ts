interface User {
    name: string,
    balance: number
}

export const performPurchase = (user: User, value: number): User | undefined => {

    if (user.balance < value) {
        return undefined
    }

    if (user.balance >= value) {
        const updatedUser: User = {
            name: user.name,
            balance: user.balance - value
        }

        return updatedUser
    }
}