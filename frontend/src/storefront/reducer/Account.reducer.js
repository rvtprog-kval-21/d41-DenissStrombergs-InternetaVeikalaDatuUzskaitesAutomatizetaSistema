export const initialState = {
    token: ''
}

export function AccountReducer(state = JSON.parse(localStorage.getItem('ACCOUNT')) || initialState, action) {
    const { type, payload: { account } = {} } = action

    switch (type) {
        case 'SIGN_IN':
            if (account) {
                window.localStorage.setItem('ACCOUNT', JSON.stringify(account))

                return account
            }

            return state
        case 'SIGN_UP':
            if (account) {
                window.localStorage.setItem('ACCOUNT', JSON.stringify(account))

                return account
            }

            return state
        case 'SIGN_OUT':
            window.localStorage.setItem('ACCOUNT', JSON.stringify(initialState))

            return initialState
        case 'UPDATE_ACCOUNT':
            const out = {
                ...state,
                ...account
            }
            window.localStorage.setItem('ACCOUNT', JSON.stringify(out))

            return out
        case 'CHANGE_PASSWORD':
            return state
        default:
            return state
    }
}

export default AccountReducer
