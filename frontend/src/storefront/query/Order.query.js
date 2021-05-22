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

export function GetAllOrders(variables) {
    const { data: { orders } = {} } = useQuery(GET_ALL_ORDERS, { variables })

    if (!orders) {
        return null
    }

    return orders
}
