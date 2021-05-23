import { useApolloClient } from '@apollo/client'
import { Button } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { useDispatch, useSelector } from 'react-redux'
import VALIDATION from '../../../base/Validation'
import { changePassword } from '../../query/Account.query'

export function ChangePasswordForm() {
    const client = useApolloClient()
    const account = useSelector((state) => state.AccountReducer)
    const dispatch = useDispatch()
    const initialValues = {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    }

    const onSubmit = async (values, props) => {
        const { setSubmitting } = props

        setSubmitting(false)

        dispatch({
            type: 'CHANGE_PASSWORD',
            payload: {
                account: await changePassword(client, {
                    customerId: account.id,
                    oldPassword: values.oldPassword,
                    newPassword: values.newPassword
                })
            }
        })
    }

    const renderForm = (props) => {
        const { submitForm, isSubmitting } = props

        return (
            <Form>
                <Field
                    component={ TextField }
                    type="password"
                    name="oldPassword"
                    label="Old password"
                    fullWidth
                />
                <Field
                    component={ TextField }
                    type="password"
                    name="newPassword"
                    label="New password"
                    fullWidth
                />
                <Field
                    component={ TextField }
                    type="password"
                    name="confirmNewPassword"
                    label="Confirm new password"
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
            validationSchema={ VALIDATION.PASSWORD }
            onSubmit={ onSubmit }
        >
            { renderForm }
        </Formik>
    )
}

export default ChangePasswordForm

