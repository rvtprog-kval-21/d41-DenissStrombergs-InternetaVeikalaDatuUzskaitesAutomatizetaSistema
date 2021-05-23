import { Grid } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem.component'

export function renderCartItem(cartItem) {
    return (
        <CartItem cartItem={ cartItem } />
    )
}

export function CartList() {
    const cartItems = useSelector((state) => state.CartReducer)

    return (
        <Grid container spacing={ 2 }>
            { Object.values(cartItems).map(renderCartItem) }
        </Grid>
    )
}

export default CartList
