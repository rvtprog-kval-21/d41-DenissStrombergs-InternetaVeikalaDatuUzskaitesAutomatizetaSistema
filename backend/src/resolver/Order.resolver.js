export const orderResolver = {
    Query: {
        customerOrder: async function(_, data, { models, token }) {
            try {
                const customer = await models.Customer.findOne({ where: { token }})

                if (!customer) {
                    return null
                }

                return await models.Order.findOne({ where: { id: data.id, customer_id: customer.id } })
            } catch (error) {
                console.error(error)

                return null
            }
        },
        allCustomerOrders: async function(_, data, { models, token }) {
            try {
                const customer = await models.Customer.findOne({ where: { token }})

                if (!customer) {
                    return null
                }

                return await models.Order.findAll({ where: { customer_id: customer.id } })
            } catch (error) {
                console.error(error)

                return null
            }
        }
    }
}

export default orderResolver
