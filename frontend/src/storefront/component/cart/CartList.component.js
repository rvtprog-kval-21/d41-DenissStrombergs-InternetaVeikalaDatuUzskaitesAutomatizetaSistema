import { Grid } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem.component'

export function CartList(props) {
    const { shouldRenderCartItemActions } = props
    const cartItems = useSelector((state) => state.CartReducer)

    const renderCartItem = (cartItem) => {
        return (
            <CartItem cartItem={ cartItem } shouldRenderCartItemActions={ shouldRenderCartItemActions } />
        )
    }

    return (
        <Grid container spacing={ 2 }>
            { Object.values(cartItems).map(renderCartItem) }
        </Grid>
    )
}

export default CartList
