import { GetAllPaymentMethods } from "../../query/Checkout.query"
import { Button, FormControlLabel, Radio, FormControl, FormLabel, Grid, Typography } from '@material-ui/core'
import { Formik, Field, Form } from 'formik'
import { RadioGroup, CheckboxWithLabel } from 'formik-material-ui'
import VALIDATION from "../../../base/Validation"

export function CheckoutBillingStep(props) {
    const paymentMethods = GetAllPaymentMethods()
    const { setStep } = props

    if (!paymentMethods) {
        return null
    }

    const initialValues = {
        paymentMethod: paymentMethods[0].code,
        acceptTerms: false
    }

    const onSubmit = async (values, props) => {
        setStep('SUCCESS')
    }

    const renderPaymentMethod = function(paymentMethod) {
        const { code, name } = paymentMethod

        return (
            <FormControlLabel
                value={ code }
                control={ <Radio disabled={ this.isSubmitting } /> }
                label={ name }
                disabled={ this.isSubmitting }
            />
        )
    }

    const renderForm = ({ submitForm, isSubmitting }) => {
        return (
            <Form>
                <Typography>Terms and conditions:</Typography>
                <Field fullWidth component={ CheckboxWithLabel } type="checkbox" name="acceptTerms" Label={ { label: 'I accept terms and conditions.' } } />
                <Typography>Select payment method:</Typography>
                <FormControl fullWidth>
                    <FormLabel  htmlFor="paymentMethod">Payment method</FormLabel >
                    <Field fullWidth component={ RadioGroup } name="paymentMethod">
                        { paymentMethods.map(renderPaymentMethod, { isSubmitting }) }
                    </Field>
                </FormControl>
                <Button
                    onClick={ submitForm }
                    disabled={ isSubmitting }
                    variant="contained"
                    color="primary"
                >
                    Secure payment
                </Button>
            </Form>
        )
    }

    return (
        <Grid container spacing={ 4 }>
            <Grid item xs={ 12 }>
                <Typography variant="h3">Billing</Typography>
                <Formik
                    initialValues={ initialValues }
                    onSubmit={ onSubmit }
                    validationSchema={ VALIDATION.BILLING_STEP }
                >
                    { renderForm }
                </Formik>
            </Grid>
        </Grid>
    )
}

export default CheckoutBillingStep
