import { useApolloClient } from '@apollo/client'
import { Button } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import VALIDATION from '../../../base/Validation'
import { signUp } from '../../query/Account.query'

export function SignUpForm() {
    const client = useApolloClient()
    const history = useHistory()
    const dispatch = useDispatch()
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
    }

    const onSubmit = async (values, props) => {
        const { setSubmitting } = props

        setSubmitting(false)

        const result = await signUp(client, values)

        if (result) {
            dispatch({
                type: 'SIGN_UP',
                payload: {
                    account: result
                }
            })
            history.push('/account')
        }
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
            validationSchema={ VALIDATION.SIGN_UP }
            onSubmit={ onSubmit }
        >
            { renderForm }
        </Formik>
    )
}

export default SignUpForm
