import { Button, Typography, Grid } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import VALIDATION from '../../../base/Validation'
import { useSelector } from 'react-redux'

export function CheckoutGuestForm() {
    const account = useSelector((state) => state.AccountReducer)

    if (!account.isGuest) {
        return null
    }

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = (values, props) => {
        const { setSubmitting } = props

        setSubmitting(false)
    }

    const renderForm = (props) => {
        const { submitForm, isSubmitting } = props

        return (
            <Form>
                <Field
                    component={ TextField }
                    type="email"
                    name="email"
                    label="Email"
                    fullWidth
                />
                <Field
                    component={ TextField }
                    type="password"
                    name="password"
                    label="Password"
                    fullWidth
                />
                <Button
                    onClick={ submitForm }
                    disabled={ isSubmitting }
                    variant="contained"
                    color="primary"
                >
                    Sign up
                </Button>
            </Form>
        )
    }

    return (
        <Grid item xs={ 12 }>
            <Typography>Create an account.</Typography>
            <Formik
                initialValues={ initialValues }
                validationSchema={ VALIDATION.SIGN_IN }
                onSubmit={ onSubmit }
            >
                { renderForm }
            </Formik>
        </Grid>
    )
}

export default CheckoutGuestForm
