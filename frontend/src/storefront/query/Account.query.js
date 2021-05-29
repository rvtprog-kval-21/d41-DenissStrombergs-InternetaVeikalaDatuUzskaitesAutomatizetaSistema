import { gql, useQuery } from '@apollo/client'

export const SIGN_IN = gql`
    mutation SignIn($email: String!, $password: String!) {
        account: signIn(email: $email, password: $password) {
            id
            email
            firstName
            lastName
            token
            cart: Cart {
                items: CartItems {
                    id
                    quantity
                    product: Product {
                      id
                    }
                }
            }
        }
    }
`

export const UPDATE_ACCOUNT = gql`
    mutation UpdateAccount(
        $customerId: ID!,
        $email: String!,
        $firstName: String!,
        $lastName: String!
    ) {
        account: updateAccount(
            customer_id: $customerId,
            email: $email,
            firstName: $firstName,
            lastName: $lastName
        ) {
            email
            firstName
            lastName
        }
    }
`
export const CHANGE_PASSWORD = gql`
    mutation ChangePassword($customerId: ID!, $oldPassword: String!, $newPassword: String!) {
        changePassword(customer_id: $customerId, oldPassword: $oldPassword, newPassword: $newPassword)
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
            token
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
    }).then(({ data }) => data)
}

export function signUp(client, variables) {
    return client.mutate({
        mutation: SIGN_UP,
        variables
    }).then(({ data }) => data?.account)
}

export function changePassword(client, variables) {
    return client.mutate({
        mutation: CHANGE_PASSWORD,
        variables
    }).then(({ data }) => data)
}

export function updateAccount(client, variables) {
    return client.mutate({
        mutation: UPDATE_ACCOUNT,
        variables
    }).then(({ data }) => data.account)
}

