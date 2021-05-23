import { Button } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'

export function ChangePasswordForm() {
    const initialValues = {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
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
            validate={ validate }
            onSubmit={ onSubmit }
        >
            { renderForm }
        </Formik>
    )
}

export default ChangePasswordForm

