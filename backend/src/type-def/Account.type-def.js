export const accountTypeDef = `
    type Mutation {
        signIn(email: String!, password: String!) : Customer
        signUp(email: String!, password: String!, firstName: String!, lastName: String!) : Customer
        signOut(customer_id: ID!) : Boolean
        updateAccount(customer_id: ID!, email: String!, firstName: String!, lastName: String!) : Customer
        changePassword(customer_id: ID!, oldPassword: String!, newPassword: String!) : Boolean
    }
`

export default accountTypeDef
