const initialState = {}

export function CustomerReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case 'SIGN_IN':
            return state
        case 'SIGN_UP':
            return state
        default:
            return state
    }
}

export default CustomerReducer
