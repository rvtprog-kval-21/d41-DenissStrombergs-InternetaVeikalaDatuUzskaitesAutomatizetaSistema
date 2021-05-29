import { Typography } from '@material-ui/core'
import CartTotals from './CartTotals.component'

export function CartSummary() {
    return (
        <div>
            <Typography>
                CartSummary
            </Typography>
            <CartTotals />
        </div>
    )
}

export default CartSummary
