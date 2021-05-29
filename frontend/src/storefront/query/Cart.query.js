import { gql } from '@apollo/client'

export const ADD_PRODUCT = gql`
    mutation AddProduct($productId: ID!, $quantity: Int!) {
        cartItem: addProduct(product_id: $productId, quantity: $quantity) {
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
    mutation RemoveProduct($productId: ID!, $quantity: Int!) {
        cartItem: removeProduct(product_id: $productId, quantity: $quantity) {
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
    mutation ClearCart {
        clearCart
    }
`

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
