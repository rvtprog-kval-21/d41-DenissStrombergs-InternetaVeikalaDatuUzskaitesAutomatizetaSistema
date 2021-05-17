import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import CartReducer from '../storefront/store/Cart/Cart.reducer'
import CustomerReducer from '../storefront/store/Customer/Customer.reducer'

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    CartReducer,
    CustomerReducer
})

export default createRootReducer
