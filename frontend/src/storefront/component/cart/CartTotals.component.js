import { useSelector } from 'react-redux'

export function CartTotals() {
    const cartItems = useSelector((state) => state.CartReducer)
    const totalTax = ''

    return (
        null
    )
}

export default CartTotals
