import React from 'react'
import AddressForm from '../../component/AddressForm/AddressForm.component'
import CheckoutDeliveryOptions from '../../component/CheckoutDeliveryOptions/CheckoutDeliveryOptions.component'
import CheckoutGuestForm from '../../component/CheckoutGuestForm/CheckoutGuestForm.component'
import CheckoutShippingForm from '../../component/CheckoutShippingForm/CheckoutShippingForm.component'
import CheckoutSummary from '../../component/CheckoutSummary/CheckoutSummary.component'

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
