export const userTypeDef = `
    type Mutation {
        signInUser(username: String!, password: String!) : User
        signOutUser(token: String!) : Boolean
        validateToken(token: String!) : Boolean
    }
`

export default userTypeDef
