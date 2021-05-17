export const accountTypeDef = `
    type Mutation {
        signIn(email: String!, password: String!) : Customer
        signUp(email: String!, password: String!, firstName: String!, lastName: String!) : Customer
        signOut(customer_id: ID!) : Boolean
    }
`

export default accountTypeDef
