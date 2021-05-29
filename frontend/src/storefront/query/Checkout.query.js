import { gql, useQuery } from '@apollo/client'

export const GET_ALL_SHIPPING_METHODS = gql`
    query GetAllShippingMethods {
        shippingMethods: allShippingMethods {
            id
            code
            name
        }
    }
`

export const GET_ALL_PAYMENT_METHODS = gql`
    query GetAllPaymentMethods {
        paymentMethods: allPaymentMethods {
            id
            code
            name
        }
    }
`

export const SUBMIT_ORDER = gql`
    mutation SubmitOrder($token: String!) {
        submitOrder(token: $token)
    }
`

export function GetAllShippingMethods() {
    const { loading, error, data: { shippingMethods } = {} } = useQuery(GET_ALL_SHIPPING_METHODS, {})

    if (loading || error) {
        return null
    }

    return shippingMethods
}

export function GetAllPaymentMethods() {
    const { loading, error, data: { paymentMethods } = {} } = useQuery(GET_ALL_PAYMENT_METHODS, {})

    if (loading || error) {
        return null
    }

    return paymentMethods
}

export function SubmitOrder(variables) {
    const { loading, error, data } = useQuery(SUBMIT_ORDER, { variables })

    if (loading || error) {
        return null
    }

    return data
}
