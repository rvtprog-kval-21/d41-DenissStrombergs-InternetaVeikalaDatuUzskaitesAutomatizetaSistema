import { Button } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'

export function SignUpForm() {
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
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
                <Field
                    component={ TextField }
                    type="password"
                    name="confirmPassword"
                    label="Confirm password"
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
                    Sign up
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

export default SignUpForm
