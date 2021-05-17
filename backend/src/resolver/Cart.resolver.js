export const cartResolver = {
    Mutation: {
        addProduct: async function(_, data, { models }) {
            try {
                
            } catch (error) {
                console.error(error)

                return null
            }
        },
        removeProduct: async function(_, data, { models }) {
            try {

            } catch (error) {
                console.error(error)

                return null
            }
        }
    }
}

export default cartResolver
