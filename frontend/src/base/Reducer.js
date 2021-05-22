import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import CartReducer from '../storefront/store/Cart.reducer'
import AccountReducer from '../storefront/store/Account.reducer'

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    CartReducer,
    AccountReducer
})

export default createRootReducer
