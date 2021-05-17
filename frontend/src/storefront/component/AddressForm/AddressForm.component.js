import { Button } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'

export function AddressForm() {
    const initialValues = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        country: '',
        city: '',
        province: '',
        street1: '',
        street2: '',
        postalCode: ''
    }

    const validate = (values) => {
        const errors = {}

        return errors
    }

    const onSubmit = (values, props) => {
        const { setSubmitting } = props

        setSubmitting(false)
        console.log(values)
    }

    const renderForm = (props) => {
        const { submitForm, isSubmitting } = props

        return (
            <Form>
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
                <Button
                    onClick={ submitForm }
                    disabled={ isSubmitting }
                    variant="contained"
                    color="primary"
                >
                    Save
                </Button>
            </Form>
        )
    }

    return (
        <Formik
            initialValues={ initialValues }
            validate={ validate }
            onSubmit={ onSubmit }
        >
            { renderForm }
        </Formik>
    )
}

export default AddressForm
