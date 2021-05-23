import { gql, useQuery } from '@apollo/client'

export const SIGN_IN = gql`
    mutation SignIn($email: String!, $password: String!) {
        account: signIn(email: $email, password: $password) {
            id
            email
            firstName
            lastName
            cartItems: CartItems {
                id
                quantity
                products: Product {
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
        account: signUp(
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

export function signIn(client, variables) {
    return client.mutate({
        mutation: SIGN_IN,
        variables
    }).then(({ data }) => data?.account)
}

export function singOut(client, variables) {
    return client.mutate({
        mutation: SIGN_OUT,
        variables
    }).then(({ data }) => data?.account)
}

export function SignUp(client, variables) {
    return client.mutate({
        mutation: SIGN_UP,
        variables
    }).then(({ data }) => data?.account)
}
