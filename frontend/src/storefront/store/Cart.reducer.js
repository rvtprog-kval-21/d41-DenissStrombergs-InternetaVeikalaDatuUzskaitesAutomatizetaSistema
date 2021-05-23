export const initialState = JSON.parse(window.localStorage.getItem('CART')) || {}

export function CartReducer(state = initialState, action) {
    const { type, payload: { cartItem } = {} } = action

    switch (type) {
        case 'ADD_PRODUCT_TO_CART':
            const out = {
                ...state,
                [cartItem.id]: cartItem
            }
            window.localStorage.setItem('CART', JSON.stringify(out))

            return out
        case 'REMOVE_PRODUCT_FROM_CART':
            if (cartItem) {
                const out = {
                    ...state,
                    [cartItem.id]: cartItem
                }
                window.localStorage.setItem('CART', JSON.stringify(out))

                return out
            } else {
                const { [cartItem.id]: a, ...other } = state
                window.localStorage.setItem('CART', JSON.stringify(other))

                return other
            }
        case 'DELETE_PRODUCT_FROM_CART':
            const { [cartItem.id]: a, ...other } = state
            window.localStorage.setItem('CART', JSON.stringify(other))

            return other
        default:
            return state
    }
}

export default CartReducer
