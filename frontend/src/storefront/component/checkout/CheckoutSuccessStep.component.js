import { Button, Grid } from '@material-ui/core'
import CheckoutGuestForm from './CheckoutGuestForm.component'

export function CheckoutSuccessStep(props) {
    return (
        <Grid container spacing={ 4 }>
            <CheckoutGuestForm />
            <Grid item xs={ 12 }>
                <Button href="/" variant="contained" color="primary">
                    Continue shopping
                </Button>
            </Grid>
        </Grid>
    )
}

export default CheckoutSuccessStep
