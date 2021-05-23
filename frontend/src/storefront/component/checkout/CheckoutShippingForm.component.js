import React from 'react'
import AddressForm from '../account/AddressForm.component'

export function CheckoutShippingForm() {
    return (
        <AddressForm shouldRenderSubmitButton={ false } />
    )
}

export default CheckoutShippingForm
