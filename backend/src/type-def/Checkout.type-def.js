export const checkoutTypeDef = `
    type Query {
        submitOrder(
            address_id: ID!,
            shipping_method_id: ID!,
            payment_method_id: ID!
        ) : String
    }
`

export default checkoutTypeDef
