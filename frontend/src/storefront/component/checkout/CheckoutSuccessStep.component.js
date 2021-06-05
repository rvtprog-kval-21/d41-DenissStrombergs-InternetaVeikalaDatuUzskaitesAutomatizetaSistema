import { Button, Grid } from '@material-ui/core'

export function CheckoutSuccessStep() {
    return (
        <Grid container spacing={ 4 }>
            <Grid item xs={ 12 }>
                <Button href="/" variant="contained" color="primary">
                    Continue shopping
                </Button>
            </Grid>
        </Grid>
    )
}

export default CheckoutSuccessStep
