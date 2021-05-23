import { Typography } from "@material-ui/core"
import CartList from "../cart/CartList.component"

export function CheckoutSummary() {
    return (
        <div>
            <Typography>
                Summary
            </Typography>
            <CartList shouldRenderCartItemActions={ false } />
        </div>
    )
}

export default CheckoutSummary
