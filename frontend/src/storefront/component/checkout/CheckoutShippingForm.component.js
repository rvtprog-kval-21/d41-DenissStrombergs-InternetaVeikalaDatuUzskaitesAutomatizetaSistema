import { Typography } from '@material-ui/core'
import React from 'react'
import AddressForm from '../account/AddressForm.component'

export function CheckoutShippingForm() {
    return (
        <div>
            <Typography>Enter your shipping information:</Typography>
            <AddressForm shouldRenderSubmitButton={ false } />
        </div>
    )
}

export default CheckoutShippingForm
