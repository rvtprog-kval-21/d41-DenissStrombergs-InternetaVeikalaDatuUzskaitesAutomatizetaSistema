import { Button } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'

export function SearchForm() {
    const initialValues = {
        search: ''
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
                    name="search"
                    label="Search"
                    fullWidth
                />
                <Button
                    onClick={ submitForm }
                    disabled={ isSubmitting }
                    variant="contained"
                    color="primary"
                >
                    Search
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

export default SearchForm
