import { Button, FormControl, InputLabel, MenuItem, TextareaAutosize } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField, Select } from 'formik-material-ui'

export function ReviewForm() {
    const initialValues = {
        title: '',
        content: '',
        rating: ''
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
                    name="title"
                    label="Title"
                    fullWidth
                />
                <Field
                    component={ TextField }
                    type="text"
                    name="content"
                    label="Content"
                    fullWidth
                    multiline
                    rows={ 10 }
                />
                <FormControl fullWidth>
                    <InputLabel htmlFor="rating">Rating</InputLabel>
                    <Field
                        component={ Select }
                        name="select"
                        label="Rating"
                        fullWidth
                        inputProps={{
                            id: 'rating'
                        }}
                    >
                        <MenuItem value={ 1 }>1</MenuItem>
                        <MenuItem value={ 2 }>2</MenuItem>
                        <MenuItem value={ 3 }>3</MenuItem>
                        <MenuItem value={ 4 }>4</MenuItem>
                        <MenuItem value={ 5 }>5</MenuItem>
                        <MenuItem value={ 6 }>6</MenuItem>
                        <MenuItem value={ 7 }>7</MenuItem>
                        <MenuItem value={ 8 }>8</MenuItem>
                        <MenuItem value={ 9 }>9</MenuItem>
                        <MenuItem value={ 10 }>10</MenuItem>
                    </Field>
                </FormControl>
                <Button
                    onClick={ submitForm }
                    disabled={ isSubmitting }
                    variant="contained"
                    color="primary"
                >
                    Post
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

export default ReviewForm
