import React from 'react'
import { Formik } from 'formik'
import TextField from '@material-ui/core/TextField'
import { Button, Typography } from '@material-ui/core'

export function CheckoutShippingForm() {
    const renderForm = (props) => {
        const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = props

        return (
            <form onSubmit={handleSubmit}>
                <Typography>Enter personal information</Typography>
                <TextField
                    error={ errors.firstName && touched.firstName }
                    helperText={ errors.firstName }
                    label="First name"
                    placeholder="First name"
                    fullWidth
                    type="text"
                    name="first_name"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.firstName }
                />
                <TextField
                    error={ errors.lastName && touched.lastName }
                    helperText={ errors.lastName }
                    label="Last name"
                    placeholder="Last name"
                    fullWidth
                    type="text"
                    name="last_name"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.lastName }
                />
                <TextField
                    error={ errors.phoneNumber && touched.phoneNumber }
                    helperText={ errors.phoneNumber }
                    label="Phone number"
                    placeholder="Phone number"
                    fullWidth
                    type="tel"
                    name="phone_number"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.phoneNumber }
                />
                <TextField
                    error={ errors.phoneNumber && touched.phoneNumber }
                    helperText={ errors.phoneNumber }
                    label="Phone number"
                    placeholder="Phone number"
                    fullWidth
                    type="tel"
                    name="phone_number"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.phoneNumber }
                />
                <Button
                    type="submit"
                    disabled={ isSubmitting }
                    variant="contained"
                    color="primary"
                >
                    Proceed to billing
                </Button>
            </form>
        )
    }

    return (
        <div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    streetAddressLine1: '',
                    streetAddressLine2: '',
                    streetAddressLine3: '',
                    city: '',
                    postal_code: ''
                }}
            >
                { renderForm }
            </Formik>
        </div>
    )
}

export default CheckoutShippingForm
