import { Button, Grid, Typography } from '@material-ui/core'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import CheckoutGuestForm from '../component/checkout/CheckoutGuestForm.component'
import CheckoutShippingForm from '../component/checkout/CheckoutShippingForm.component'
import CheckoutSummary from '../component/checkout/CheckoutSummary.component'

export function Checkout() {
    const [step, setStep] = useState('SHIPPING')
    const account = useSelector((state) => state.AccountReducer)

    const renderCheckoutGuestForm = () => {
        if (account) {
            return null
        }

        return (
            <CheckoutGuestForm />
        )
    }

    const renderShippingStep = () => {
        return (
            <Grid container spacing={ 4 }>
                <Grid item xs={ 7 }>
                    { renderCheckoutGuestForm() }
                    <CheckoutShippingForm />
                    <Button variant="contained" color="primary">
                        Proceed to billing
                    </Button>
                </Grid>
                <Grid item xs={ 5 }>
                    <CheckoutSummary />
                </Grid>
            </Grid>
        )
    }

    const stepRenderMap = {
        'SHIPPING': renderShippingStep
    }

    return stepRenderMap[step]()
}

export default Checkout
