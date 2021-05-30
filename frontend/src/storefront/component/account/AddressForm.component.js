import { Button } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import VALIDATION from '../../../base/Validation'

export function AddressFormFields() {
    return (
        <>
            <Field
                component={ TextField }
                type="text"
                name="firstName"
                label="First name"
                fullWidth
            />
            <Field
                component={ TextField }
                type="text"
                name="lastName"
                label="Last name"
                fullWidth
            />
            <Field
                component={ TextField }
                type="text"
                name="phoneNumber"
                label="Phone number"
                fullWidth
            />
            <Field
                component={ TextField }
                type="text"
                name="country"
                label="Country"
                fullWidth
            />
            <Field
                component={ TextField }
                type="text"
                name="city"
                label="City"
                fullWidth
            />
            <Field
                component={ TextField }
                type="text"
                name="province"
                label="Province"
                fullWidth
            />
            <Field
                component={ TextField }
                type="text"
                name="street1"
                label="Street 1"
                fullWidth
            />
            <Field
                component={ TextField }
                type="text"
                name="street2"
                label="Street 2"
                fullWidth
            />
            <Field
                component={ TextField }
                type="text"
                name="postalCode"
                label="Postal code"
                fullWidth
            />
        </>
    )
}

export function AddressForm(props) {
    const { address = {}, shouldRenderSubmitButton = true } = props
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
        ...address
    }

    const onSubmit = (values, props) => {
        const { setSubmitting } = props

        setSubmitting(false)
    }

    const renderSaveButton = (props) => {
        const { submitForm, isSubmitting } = props

        if (!shouldRenderSubmitButton) {
            return null
        }

        return (
            <Button
                onClick={ submitForm }
                disabled={ isSubmitting }
                variant="contained"
                color="primary"
            >
                Save
            </Button>
        )
    }

    const renderForm = (props) => {
        return (
            <Form>
                <AddressFormFields />
                { renderSaveButton(props) }
            </Form>
        )
    }

    return (
        <Formik
            initialValues={ initialValues }
            validationSchema={ VALIDATION.ADDRESS }
            onSubmit={ onSubmit }
        >
            { renderForm }
        </Formik>
    )
}

export default AddressForm
