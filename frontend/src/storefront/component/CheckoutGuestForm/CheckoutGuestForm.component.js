import React from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';

export function CheckoutGuestForm() {
    const renderForm = (props) => {
        const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = props

        return (
            <form onSubmit={handleSubmit}>
                <Typography>Enter personal information</Typography>
                <TextField
                    error={ errors.email && touched.email }
                    helperText={ errors.email }
                    label="Email"
                    placeholder="Email"
                    fullWidth
                    type="email"
                    name="email"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.email }
                />
                <TextField
                    error={ errors.password && touched.password }
                    helperText={ errors.password }
                    label="Password"
                    placeholder="Password"
                    fullWidth type="password"
                    name="password"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.password }
                />
                <Button
                    type="submit"
                    disabled={ isSubmitting }
                    variant="contained"
                    color="primary"
                >
                    Sign in
                </Button>
            </form>
        )
    }

    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
            >
                { renderForm }
            </Formik>
        </div>
    )
}

export default CheckoutGuestForm
