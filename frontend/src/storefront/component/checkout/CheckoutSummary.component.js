import { Typography } from "@material-ui/core"
import CartList from "../cart/CartList.component"
import CartTotals from "../cart/CartTotals.component"

export function CheckoutSummary() {
    return (
        <div>
            <Typography>
                Summary
            </Typography>
            <CartList shouldRenderCartItemActions={ false } />
            <CartTotals />
        </div>
    )
}

export default CheckoutSummary
