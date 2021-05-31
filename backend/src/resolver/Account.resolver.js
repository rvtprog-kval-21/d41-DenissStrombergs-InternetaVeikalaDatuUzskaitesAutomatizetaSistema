import { generateToken } from "../base/Auth"

export const accountResolver = {
    Mutation: {
        signIn: async function(_, data, { models }) {
            try {
                const customer = await models.Customer.findOne({ where: {
                    email: data.email,
                    password: data.password
                }, include: { model: models.CartItem, include: [models.Product] }})
                customer.isSignedIn = true
                customer.token = generateToken(customer)
                customer.save()

                return customer
            } catch (error) {
                console.error(error)

                return null
            }
        },
        signOut: async function(_, data, { models }) {
            try {
                const customer = await models.Customer.findOne({ where: { token }})
                customer.isSignedIn = false
                await customer.save()

                return true
            } catch (error) {
                console.error(error)

                return null
            }
        },
        signUp: async function(_, data, { models }) {
            try {
                return await models.Customer.create(data)
            } catch (error) {
                console.error(error)

                return null
            }
        },
        changePassword: async function(_, data, { models }) {
            try {
                const customer = await models.Customer.findOne({ where: { token }})
                
                if (customer) {
                    if (data.oldPassword == customer.password) {
                        customer.password = data.newPassword
                        await customer.save()
                        return true
                    }
                }

                return false
            } catch (error) {
                console.error(error)

                return null
            }
        },
        updateAccount: async function(_, data, { models, token }) {
            try {
                const customer = await models.Customer.findOne({ where: { token }})
                
                if (customer) {
                    customer.email = data.email
                    customer.firstName = data.firstName
                    customer.lastName = data.lastName
                    await customer.save()
                    
                    return customer
                }

                return null
            } catch (error) {
                console.error(error)

                return null
            }
        }
    }
}

export default accountResolver
