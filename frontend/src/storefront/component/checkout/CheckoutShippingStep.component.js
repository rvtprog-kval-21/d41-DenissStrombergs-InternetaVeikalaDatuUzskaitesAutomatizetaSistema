import { GetAllShippingMethods } from "../../query/Checkout.query"
import { Button, FormControlLabel, Radio, FormControl, FormLabel, Grid } from '@material-ui/core'
import { Formik, Field, Form } from 'formik'
import { RadioGroup } from 'formik-material-ui'
import { Typography } from '@material-ui/core'
import CheckoutAddressSelector from "./CheckoutAddressSelector.component"
import { useState } from "react"
import VALIDATION from "../../../base/Validation"

export function CheckoutShippingStep(props) {
    const [addressId, setAddressId] = useState(0)
    const shippingMethods = GetAllShippingMethods()
    const { setStep } = props

    if (!shippingMethods) {
        return null
    }

    const initialValues = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        country: '',
        city: '',
        province: '',
        street1: '',
        street2: '',
        postalCode: '',
        shippingMethod: shippingMethods[0].code
    }

    const onSubmit = async (values, props) => {
        if (addressId) {
            setStep('BILLING')
        } else {
            setStep('BILLING')
        }
    }

    const renderShippingMethod = function(shippingMethod) {
        const { code, name } = shippingMethod

        return (
            <FormControlLabel
                value={ code }
                control={ <Radio disabled={ this.isSubmitting } /> }
                label={ name }
                disabled={ this.isSubmitting }
            />
        )
    }

    const renderForm = ({ isSubmitting, submitForm }) => {
        return (
            <Form>
                <Typography variant="h3">Shipping</Typography>
                <CheckoutAddressSelector addressId={ addressId } setAddressId={ setAddressId } />
                <Typography variant="h6">Choose shipping method:</Typography>
                <FormControl fullWidth>
                    <FormLabel htmlFor="shippingMethod">Shipping method</FormLabel >
                    <Field component={ RadioGroup } name="shippingMethod">
                        { shippingMethods.map(renderShippingMethod, { isSubmitting }) }
                    </Field>
                </FormControl>
                <Button
                    onClick={ submitForm }
                    disabled={ isSubmitting }
                    variant="contained"
                    color="primary"
                >
                    Proceed to billing
                </Button>
            </Form>
        )
    }

    return (
        <Grid container spacing={ 4 }>
            <Grid item xs={ 12 }>
                <Formik
                    initialValues={ initialValues }
                    onSubmit={ onSubmit }
                    validationSchema={ VALIDATION.SHIPPING_STEP }
                >
                    { renderForm }
                </Formik>
            </Grid>
        </Grid>
    )
}

export default CheckoutShippingStep
