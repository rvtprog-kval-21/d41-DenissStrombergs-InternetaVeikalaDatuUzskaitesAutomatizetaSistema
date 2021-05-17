export const SignIn = `
    mutation SignIn($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
            id
            email
            firstName
            lastName
        }
    }
`

export const SignOut= `
    mutation SignOut($customerId: ID!) {
        signOut(customer_id: $customerId)
    }
`

export const SignUp = `
    mutation SignUp($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
        signUp(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
            id
            email
            firstName
            lastName
        }
    }
`

export function SignIn() {

}

export function SingOut() {

}

export function SignUp() {

}
