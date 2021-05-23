import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from '../CartItem/CartItem.component'

export function renderCartItem(cartItem) {
    return (
        <CartItem cartItem={ cartItem } />
    )
}

export function CartList() {
    const cartItems = useSelector((state) => state.CartReducer)

    return (
        <div>
            { Object.values(cartItems).map(renderCartItem) }
        </div>
    )
}

export default CartList
