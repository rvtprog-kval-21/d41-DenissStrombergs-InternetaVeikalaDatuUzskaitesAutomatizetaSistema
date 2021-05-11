import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from '../CartItem/CartItem.component'

export function renderCartItem(product) {
    return (
        <CartItem product={ product } />
    )
}

export function CartList() {
    const { products } = useSelector((state) => state.CartReducer)

    return (
        <div>
            { Object.values(products).map(renderCartItem) }
        </div>
    )
}

export default CartList
