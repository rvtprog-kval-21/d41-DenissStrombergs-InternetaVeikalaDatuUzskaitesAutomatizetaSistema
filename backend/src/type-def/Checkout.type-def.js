export const checkoutTypeDef = `
    type Mutation {
        submitOrder(token: String!) : Boolean
    }
`

export default checkoutTypeDef
