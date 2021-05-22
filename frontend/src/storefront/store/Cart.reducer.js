const initialState = JSON.parse(window.localStorage.getItem('CART')) || {
    products: {}
}

export function CartReducer(state = initialState, action) {
    const { products } = state
    const { type, payload: { product, product: { id } = {} } = {} } = action

    if (!id) {
        return state
    }

    switch (type) {
        case 'ADD_PRODUCT_TO_CART':
            const out = {
                ...state,
                products: {
                    ...products,
                    [id]: {
                        product,
                        quantity: products[id]?.quantity + 1 || 1
                    }
                }
            }

            console.log(products)

            window.localStorage.setItem('CART', JSON.stringify(out))
            return out
        case 'REMOVE_PRODUCT_FROM_CART':
            const out2 = {
                ...state,
                products: {
                    ...products,
                    [id]: {
                        product,
                        quantity: products[id]?.quantity - 1 || 1
                    }
                }
            }

            window.localStorage.setItem('CART', JSON.stringify(out2))
            return out2
        case 'DELETE_PRODUCT_FROM_CART':
            return state
        default:
            return state
    }
}

export default CartReducer
