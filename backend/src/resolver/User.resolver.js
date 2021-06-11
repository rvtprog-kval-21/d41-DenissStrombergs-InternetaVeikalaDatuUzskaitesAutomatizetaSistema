import { compareHash, encryptPassword, generateToken } from '../base/Auth'

export const userResolver = {
    Mutation: {
        signInUser: async function(_, data, { models }) {
            try {
                const user = await models.User.findOne({ where: {
                    username: data.username
                }})

                if (user && compareHash(user.password, data.password)) {
                    user.token = generateToken(user)
                    await user.save()
                    return user
                }

                return null
            } catch (error) {
                console.error(error)

                return null
            }
        },
        updateUser: async function(_, data, { models }) {
            try {
                const user = await models.User.findOne({ where: {
                    id: data.id
                }})

                if (user && compareHash(user.password, data.currentPassword)) {
                    user.username = data.username
                    user.firstName = data.firstName
                    user.lastName = data.lastName
                    user.email = data.email

                    if (data.password) {
                        user.password = encryptPassword(data.password)
                    }

                    await user.save()
                    user.password = null

                    return user
                }

                return null
            } catch (error) {
                console.error(error)

                return null
            }
        }
    }
}

export default userResolver
