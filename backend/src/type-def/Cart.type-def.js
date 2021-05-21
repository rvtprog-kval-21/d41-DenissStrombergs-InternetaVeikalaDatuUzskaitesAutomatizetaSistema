export const cartTypeDef = `
    type Mutation {
        addProduct(cart_id: ID!, product_id: ID!, quantity: Int!) : Boolean
        removeProduct(cart_id: ID!, product_id: ID!, quantity: Int!) : Boolean
        clearCart(cart_id: ID!) : Boolean
    }
`

export default cartTypeDef
