import { Button, Typography } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { useSelector } from 'react-redux'
import ChangePasswordForm from './ChangePassword.component'

export function AccountSettings() {
    const account = useSelector((state) => state.AccountReducer)
    
    const initialValues = account

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
                    type="email"
                    name="email"
                    label="Email"
                    fullWidth
                />
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
        <div>
            <Typography variant="h5">Settings</Typography>
            <Formik
                initialValues={ initialValues }
                validate={ validate }
                onSubmit={ onSubmit }
            >
                { renderForm }
            </Formik>
            <ChangePasswordForm />
        </div>
    )
}

export default AccountSettings
