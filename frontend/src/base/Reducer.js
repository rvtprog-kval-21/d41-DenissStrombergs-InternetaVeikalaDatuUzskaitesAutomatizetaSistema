import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import CartReducer from '../storefront/store/Cart.reducer'
import AccountReducer from '../storefront/store/Account.reducer'
import CheckoutReducer from '../storefront/store/Checkout.reducer'
import ConfigReducer from '../storefront/store/Config.reducer'

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    CartReducer,
    AccountReducer,
    CheckoutReducer,
    ConfigReducer
})

export default createRootReducer
