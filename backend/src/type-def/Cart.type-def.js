export const cartTypeDef = `
    type CartItem {
        Product: Product
    }

    type Mutation {
        addProduct(customer_id: ID!, product_id: ID!, quantity: Int!) : CartItem
        removeProduct(customer_id: ID!, product_id: ID!, quantity: Int!) : CartItem
        clearCart(customer_id: ID!) : Boolean
    }
`

export default cartTypeDef
