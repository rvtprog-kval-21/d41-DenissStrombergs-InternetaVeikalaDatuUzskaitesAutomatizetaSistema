import { Button, Typography } from '@material-ui/core'
import CartTotals from './CartTotals.component'

export function CartSummary() {
    return (
        <div>
            <Typography variant="h3">
                Summary
            </Typography>
            <CartTotals />
            <Button variant="contained" color="primary" href="/checkout">Proceed to checkout</Button>
        </div>
    )
}

export default CartSummary
