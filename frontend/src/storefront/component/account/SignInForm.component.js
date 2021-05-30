import { useApolloClient } from '@apollo/client'
import { Button } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import VALIDATION from '../../../base/Validation'
import { signIn } from '../../query/Account.query'

export function SignInForm() {
    const client = useApolloClient()
    const history = useHistory()
    const dispatch = useDispatch()
    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = async (values, props) => {
        const { setSubmitting } = props

        setSubmitting(false)

        const result = await signIn(client, values)

        if (result) {
            dispatch({
                type: 'SIGN_IN',
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
                <Button
                    onClick={ submitForm }
                    disabled={ isSubmitting }
                    variant="contained"
                    color="primary"
                >
                    Sign in
                </Button>
            </Form>
        )
    }

    return (
        <Formik
            initialValues={ initialValues }
            validationSchema={ VALIDATION.SIGN_IN }
            onSubmit={ onSubmit }
        >
            { renderForm }
        </Formik>
    )
}

export default SignInForm
