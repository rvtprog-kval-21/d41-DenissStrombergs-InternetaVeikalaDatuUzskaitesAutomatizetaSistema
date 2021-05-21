import { gql, useQuery } from '@apollo/client'

export const GET_CART = gql`
    query GetCart(customerId: ID!) {
        allCarts(filter: { customer_id: $customerId }) {
            id
            Products {
              id
            }
        }
    }
`

export const UPDATE_CART = ``

export const CLEAR_CART = gql`
    mutation ClearCart(customerId: ID!) {
        clearCart(customer_id: $customerId) {
            id
        }
    }
`

export const ADD_PRODUCT = ``

export const REMOVE_PRODUCT = ``

export function GetCart() {

}

export function UpdateCart() {

}

export function DeleteCart() {

}

export function AddProduct() {

}

export function RemoveProduct() {

}

export const CART = gql`
    query Cart($key: String!) {
        allCarts(filter: { key: $key }) {
            id
        }
    }
`

export function Cart({ key }) {
    const { data: { allCarts: [cart] = [] } = {} } = useQuery(CART, {
        variables: { key }
    })

    if (!cart) {
        return null
    }

    return cart
}

export default Cart
