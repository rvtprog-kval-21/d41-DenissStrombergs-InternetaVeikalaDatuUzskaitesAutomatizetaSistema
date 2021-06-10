import { compareHash, generateToken } from '../base/Auth'

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
        }
    }
}

export default userResolver
