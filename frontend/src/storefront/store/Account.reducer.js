const initialState = JSON.parse(localStorage.getItem('ACCOUNT'))

export function AccountReducer(state = initialState, action) {
    const { type, payload: { account, isSignedIn } = {} } = action

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
            if (!isSignedIn) {
                window.localStorage.setItem('ACCOUNT', null)

                return {}
            }
        default:
            return state
    }
}

export default AccountReducer
