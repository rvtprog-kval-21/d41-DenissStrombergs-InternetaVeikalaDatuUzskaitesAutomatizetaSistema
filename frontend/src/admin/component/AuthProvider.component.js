const SIGN_IN_USER = `
    mutation SingInUser($username: String!, $password: String!) {
        user: signInUser(username: $username, password: $password) {
            id
            username
            email
            firstName
            lastName
            token
        }
    }
`

const VALIDATE_TOKEN = `
    mutation ValidateToken($token: String!) {
        isTokenValid: validateToken(token: $token)
    }
`

const authProvider = {
    login: async ({ username, password }) => {
        const user = await fetch('http://localhost:3001/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                query: SIGN_IN_USER,
                variables: {
                    username,
                    password
                }
            })
          }).then(data => data.json()).then(({data}) => data.user)

        if (user) {
            localStorage.setItem('USER', JSON.stringify(user))

            return Promise.resolve()
        }

        return Promise.reject()
    },
    logout: () => {
        localStorage.removeItem('USER')

        return Promise.resolve()
    },
    checkError: () => Promise.resolve(),
    checkAuth: async () => {
        const user = JSON.parse(localStorage.getItem('USER')) || {}
        const { token } = user

        const isTokenValid = await fetch('http://localhost:3001/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                query: VALIDATE_TOKEN,
                variables: {
                    token
                }
            })
        }).then(data => data.json()).then(({data}) => data.isTokenValid)

        return isTokenValid ? Promise.resolve() : Promise.reject()
    },
    getPermissions: () => Promise.reject(),
    getIdentity: () => {
        const user = JSON.parse(localStorage.getItem('USER'))
        const { firstName, lastName } = user

        return Promise.resolve({ fullName: `${ firstName} ${ lastName }` })
    }
}

export default authProvider
