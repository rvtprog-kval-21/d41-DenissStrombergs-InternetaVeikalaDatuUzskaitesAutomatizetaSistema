export const cartTypeDef = `
    type CartItem {
        Product: Product
    }

    type Mutation {
        addProduct(product_id: ID!, quantity: Int!) : CartItem
        removeProduct(product_id: ID!, quantity: Int!) : CartItem
        clearCart : Boolean
    }
`

export default cartTypeDef
