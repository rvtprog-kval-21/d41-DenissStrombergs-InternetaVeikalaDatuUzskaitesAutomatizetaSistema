export const checkoutResolver = {
    Mutation: {
        submitOrder: async function(_, data, { models }) {
            try {
                const customer = await models.findOne({ where: { token }})

                if (!customer) {
                    return false
                }

                return true
            } catch (error) {
                console.error(error)

                return null
            }
        }
    }
}

export default checkoutResolver
