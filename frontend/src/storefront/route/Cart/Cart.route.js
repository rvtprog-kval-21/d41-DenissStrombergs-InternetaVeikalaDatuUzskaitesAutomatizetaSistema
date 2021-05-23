import { Grid } from '@material-ui/core'
import CartList from '../../component/CartList/CartList.component'
import CartSummary from '../../component/CartSummary/CartSummary.component'

export function Cart() {
    return (
        <div>
            <Grid container>
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
