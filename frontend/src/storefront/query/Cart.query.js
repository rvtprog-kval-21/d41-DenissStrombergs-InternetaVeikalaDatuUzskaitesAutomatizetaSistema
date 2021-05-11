import { gql, useQuery } from '@apollo/client'

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
