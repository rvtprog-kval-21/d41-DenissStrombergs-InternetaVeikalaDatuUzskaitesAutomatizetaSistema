export const initialState = JSON.parse(window.localStorage.getItem('CHECKOUT')) || {}

export function CheckoutReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        default:
            return state
    }
}

export default CheckoutReducer
