export const cartResolver = {
    Mutation: {
        addProduct: async function(_, data, { models }) {
            try {
                const product = await models.CartItem.findOrCreate({
                    where: {
                        customer_id: data.customer_id,
                        product_id: data.product_id
                    },
                    defaults: data,
                    include: [
                        models.Product
                    ]
                })

                if (!product[1]) {
                    product[0].quantity += data.quantity
                    await product[0].save()
                }

                return product[0]
            } catch (error) {
                console.error(error)

                return null
            }
        },
        removeProduct: async function(_, data, { models }) {
            try {
                const product = await models.CartItem.findOne({
                    where: {
                        customer_id: data.customer_id,
                        product_id: data.product_id
                    },
                    include: [
                        models.Product
                    ]
                })

                if (product) {
                    product.quantity -= data.quantity

                    if (product.quantity <= 0) {
                        await product.destroy()
                    } else {
                        await product.save()
                    }
                }

                return product
            } catch (error) {
                console.error(error)

                return null
            }
        },
        clearCart: async function(_, data, { models }) {
            try {
                const products = await models.CartItem.findAll({ where: { customer_id: data.customer_id } })
                await products.destroy()

                return true
            } catch (error) {
                console.error(error)

                return null
            }
        }
    }
}

export default cartResolver
