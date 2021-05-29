import { Grid, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Price from '../product/Price.component'

export function CartTotals() {
    const cartItems = useSelector((state) => state.CartReducer)
    const items = Object.values(cartItems)
    const totalTax = items.reduce((acc, val) => (acc + val.product.price * (val.product.specialTaxRate || 0.21)), 0)
    const subtotal = items.reduce((acc, val) => (acc + val.product.price), 0)
    const total = subtotal + totalTax

    const totals = [
        {
            value: totalTax,
            label: 'Total tax'
        },
        {
            value: subtotal,
            label: 'Subtotal'
        },
        {
            value: total,
            label: 'Total'
        }
    ]

    const renderField = (field) => {
        const { value, label } = field

        return (
            <Grid container justify="space-between">
                <Typography variant="body" component="dt">
                    { label }
                </Typography>
                <Typography variant="body" component="dd">
                    <Price value={ value } />
                </Typography>
            </Grid>
        )
    }

    return (
        <div>
            { totals.map(renderField) }
        </div>
    )
}

export default CartTotals
