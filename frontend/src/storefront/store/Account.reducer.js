export const initialState = JSON.parse(localStorage.getItem('ACCOUNT'))

export function AccountReducer(state = initialState, action) {
    const { type, payload: { account, isSignedIn, values } = {} } = action

    switch (type) {
        case 'SIGN_IN':
            if (account) {
                window.localStorage.setItem('ACCOUNT', JSON.stringify(account))
                window.localStorage.setItem('TOKEN', account.token)

                return account
            }

            return state
        case 'SIGN_UP':
            if (account) {
                window.localStorage.setItem('TOKEN', account.token)
                window.localStorage.setItem('ACCOUNT', JSON.stringify(account))

                return account
            }

            return state
        case 'SIGN_OUT':
            if (isSignedIn) {
                window.localStorage.setItem('TOKEN', null)
                window.localStorage.setItem('ACCOUNT', null)

                return {}
            }
        case 'UPDATE_ACCOUNT':
            if (values) {
                const out = {
                    ...state,
                    ...values
                }
                window.localStorage.setItem('ACCOUNT', JSON.stringify(out))

                return out
            }

            return state
        case 'CHANGE_PASSWORD':
            return state
        default:
            return state
    }
}

export default AccountReducer
