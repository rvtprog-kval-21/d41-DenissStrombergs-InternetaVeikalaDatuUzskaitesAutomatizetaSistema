export const initialState = {
    currency: '€',
    currencySignPosition: 'left'
}

export function ConfigReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        default:
            return state
    }
}

export default ConfigReducer
