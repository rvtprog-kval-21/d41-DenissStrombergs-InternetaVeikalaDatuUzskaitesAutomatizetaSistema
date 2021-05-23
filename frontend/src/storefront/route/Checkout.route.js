import React from 'react'
import CheckoutDeliveryOptions from '../component/checkout/CheckoutDeliveryOptions.component'
import CheckoutGuestForm from '../component/checkout/CheckoutGuestForm.component'
import CheckoutShippingForm from '../component/checkout/CheckoutShippingForm.component'
import CheckoutSummary from '../component/checkout/CheckoutSummary.component'

export function Checkout() {
    return (
        <div>
            <div>
                <CheckoutGuestForm />
                <CheckoutShippingForm />
                <CheckoutDeliveryOptions />
            </div>
            <CheckoutSummary />
        </div>
    )
}

export default Checkout
