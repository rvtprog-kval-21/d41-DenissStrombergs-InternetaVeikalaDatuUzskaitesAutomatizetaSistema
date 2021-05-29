import { Grid } from '@material-ui/core'
import CartList from '../component/cart/CartList.component'
import CartSummary from '../component/cart/CartSummary.component'

export function Cart() {
    return (
        <div>
            <Grid container spacing={ 4 }>
                <Grid item xs={ 6 }>
                    <CartList />
                </Grid>
                <Grid items xs={ 6 }>
                    <CartSummary />
                </Grid>
            </Grid>
        </div>
    )
}

export default Cart
