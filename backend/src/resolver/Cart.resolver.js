export const cartResolver = {
    Mutation: {
        addProduct: async function(_, data, { models }) {
            try {
                const product = await models.CartItem.findOrCreate({ where: { cart_id: data.cart_id, product_id: data.product_id }, defaults: data })

                if (!product[1]) {
                    product.quantity += data.quantity
                    await product.save()
                }

                return product
            } catch (error) {
                console.error(error)

                return null
            }
        },
        removeProduct: async function(_, data, { models }) {
            try {
                const product = await models.CartItem.findOrCreate({ where: { cart_id: data.cart_id, product_id: data.product_id }, defaults: data })

                if (!product[1]) {
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
                const products = await models.CartItem.findAll({ where: { cart_id: data.cart_id } })
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
