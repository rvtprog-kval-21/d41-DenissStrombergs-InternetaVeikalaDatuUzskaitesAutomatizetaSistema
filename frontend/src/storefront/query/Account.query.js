import { gql, useQuery } from '@apollo/client'

export const SIGN_IN = gql`
    mutation SignIn($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
            id
            email
            firstName
            lastName
            cart: Cart {
                id
                products: Products {
                  id
                }
            }
        }
    }
`

export const SIGN_OUT= gql`
    mutation SignOut($customerId: ID!) {
        signOut(customer_id: $customerId)
    }
`

export const SIGN_UP = gql`
    mutation SignUp(
        $email: String!,
        $password: String!,
        $firstName: String!,
        $lastName: String!
    ) {
        signUp(
            email: $email,
            password: $password,
            firstName: $firstName,
            lastName: $lastName
        ) {
            id
            email
            firstName
            lastName
        }
    }
`

export function SignIn(variables) {
    const { loading, error, data } = useQuery(SIGN_IN, { variables })

    if (loading || error) {
        return null
    }

    return data
}

export function SingOut(variables) {
    const { loading, error, data } = useQuery(SIGN_OUT, { variables })

    if (loading || error) {
        return null
    }

    return data
}

export function SignUp(variables) {
    const { loading, error, data } = useQuery(SIGN_UP, { variables })

    if (loading || error) {
        return null
    }

    return data
}
