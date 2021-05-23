import { gql, useQuery } from '@apollo/client'

export const GET_CART = gql`
    query GetCart($customerId: ID!) {
        cart: allCartItems(filter: { customer_id: $customerId }) {
            id
            quantity
            product: Product {
                id
                sku
                name
                price
                stockQuantity
                specialDiscountType
                specialDiscountValue
                specialTaxRate
                media
            }
        }
    }
`

export const ADD_PRODUCT = gql`
    mutation AddProduct($customerId: ID!, $productId: ID!, $quantity: Int!) {
        cartItem: addProduct(customer_id: $customerId, product_id: $productId, quantity: $quantity) {
            id
            quantity
            product: Product {
                id
                urlKey
                sku
                name
                price
                stockQuantity
                specialDiscountType
                specialDiscountValue
                specialTaxRate
                media
            }
        }
    }
`

export const REMOVE_PRODUCT = gql`
    mutation RemoveProduct($customerId: ID!, $productId: ID!, $quantity: Int!) {
        cartItem: removeProduct(customer_id: $customerId, product_id: $productId, quantity: $quantity) {
            id
            quantity
            product: Product {
                id
                urlKey
                sku
                name
                price
                stockQuantity
                specialDiscountType
                specialDiscountValue
                specialTaxRate
                media
            }
        }
    }
`

export const CLEAR_CART = gql`
    mutation ClearCart($customerId: ID!) {
        clearCart(customer_id: $customerId)
    }
`

export function GetCart(variables) {
    const { data: { cart } = {} } = useQuery(GET_CART, { variables })

    if (!cart) {
        return null
    }

    return cart
}

export function AddProduct(client, variables) {
    return client.mutate({
        mutation: ADD_PRODUCT,
        variables
    }).then(({ data }) => data?.cartItem)
}

export function RemoveProduct(client, variables) {
    return client.mutate({
        mutation: REMOVE_PRODUCT,
        variables
    }).then(({ data }) => data?.cartItem)
}

export function ClearCart(client, variables) {
    return client.mutate({
        mutation: CLEAR_CART,
        variables
    }).then(({ data }) => data)
}
