export const initialState = {}

export function CheckoutReducer(state = JSON.parse(window.localStorage.getItem('CHECKOUT')) || initialState, action) {
    const { type, payload } = action

    switch (type) {
        case 'SET_ADDRESS':
            const out = {
                ...state,
                address: payload
            }

            window.localStorage.setItem('CHECKOUT', JSON.stringify(out))

            return out
        case 'SET_SHIPPING_METHOD':
            const out2 = {
                ...state,
                shippingMethodId: payload
            }

            window.localStorage.setItem('CHECKOUT', JSON.stringify(out2))

            return out2
        case 'SET_PAYMENT_METHOD':
            const out3 = {
                ...state,
                paymentMethodId: payload
            }

            window.localStorage.setItem('CHECKOUT', JSON.stringify(out3))

            return out3
        default:
            return state
    }
}

export default CheckoutReducer
