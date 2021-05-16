import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import CartReducer from '../storefront/store/Cart/Cart.reducer'

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    CartReducer
})

export default createRootReducer