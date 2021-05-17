export const cartTypeDef = `
    type Mutation {
        addProduct(product_id: ID!, quantity: Int!) : Boolean
        removeProduct(product_id: ID!, quantity: Int!) : Boolean
    }
`

export default cartTypeDef
