export const accountResolver = {
    Mutation: {
        signIn: async function(_, data, { models }) {
            try {
                const customer = await models.Customer.findOne({ where: {
                    email: data.email,
                    password: data.password
                }, include: { model: models.Cart, include: [models.Product] }})
                customer.isSignedIn = true
                customer.save()

                return customer
            } catch (error) {
                console.error(error)

                return null
            }
        },
        signOut: async function(_, data, { models }) {
            try {
                const customer = await models.Customer.findByPk(data.customer_id)
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
        }
    }
}

export default accountResolver
