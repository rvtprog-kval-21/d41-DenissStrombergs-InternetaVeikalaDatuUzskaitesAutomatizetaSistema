import { generateToken } from "../base/Auth"

export const userResolver = {
    Mutation: {
        signInUser: async function(_, data, { models }) {
            try {
                const user = await models.User.findOne({ where: {
                    username: data.username,
                    password: data.password
                }})

                if (user) {
                    user.token = generateToken(user)
                    user.save()
                }

                return user
            } catch (error) {
                console.error(error)

                return null
            }
        },
        signOutUser: async function(_, data, { models }) {
            try {
                
            } catch (error) {
                console.error(error)

                return null
            }
        },
        validateToken: async function(_, data, { models }) {
            try {
                const user = await models.User.findOne({ where: {
                    token: data.token
                }})

                if (user) {
                    return true
                }

                return false
            } catch (error) {
                console.error(error)

                return null
            }
        }
    }
}

export default userResolver
