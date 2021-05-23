import { gql, useQuery } from '@apollo/client'

export const GET_ALL_ORDERS = gql`
    query GetAllOrders($customerId: ID!) {
        orders: allOrders(filter: { customer_id: $customerId }) {
            id
            reference
            date
            status
            totalDelivery
            totalTax
            subtotal
            total
            address: Address {
                id
                firstName
                lastName
                phoneNumber
                country
                city
                province
                street1
                street2
                postalCode
            }
        }
    }
`

export const GET_ORDER = gql`
    query GetOrder($id: ID!) {
        order: Order(id: $id) {
            id
            reference
            date
            status
            totalDelivery
            totalTax
            subtotal
            total
            address: Address {
                id
                firstName
                lastName
                phoneNumber
                country
                city
                province
                street1
                street2
                postalCode
            }
        }
    }
`

export function GetAllOrders(variables) {
    const { loading, error, data: { orders } = {} } = useQuery(GET_ALL_ORDERS, { variables })

    if (loading || error) {
        return null
    }

    return orders
}

export function GetOrder(variables) {
    const { loading, error, data: { order } = {} } = useQuery(GET_ORDER, { variables })

    if (loading || error) {
        return null
    }

    return order
}
