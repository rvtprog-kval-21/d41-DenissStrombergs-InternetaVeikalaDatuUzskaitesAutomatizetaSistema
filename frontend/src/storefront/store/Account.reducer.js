const initialState = JSON.parse(localStorage.getItem('ACCOUNT')) || {}

export function AccountReducer(state = initialState, action) {
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
            window.localStorage.setItem('ACCOUNT', null)

            return state
        default:
            return state
    }
}

export default AccountReducer
