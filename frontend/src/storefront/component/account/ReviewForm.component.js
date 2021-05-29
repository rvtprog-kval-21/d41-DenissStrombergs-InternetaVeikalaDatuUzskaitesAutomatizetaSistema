import { useApolloClient } from '@apollo/client'
import { Button, FormControl, InputLabel, MenuItem } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField, Select } from 'formik-material-ui'
import { useSelector } from 'react-redux'
import VALIDATION from '../../../base/Validation'
import { createReview } from '../../query/Review.query'

export function ReviewForm(props) {
    const { productId, review } = props
    const client = useApolloClient()
    const initialValues = {
        title: '',
        content: '',
        rating: 10,
        ...review
    }

    const onSubmit = async (values, props) => {
        /*
        const { setSubmitting } = props

        setSubmitting(false)

        const review = await createReview(client, {
            ...values
        })

        console.log(review)
        */
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
                        name="rating"
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
            validationSchema={ VALIDATION.REVIEW }
            onSubmit={ onSubmit }
        >
            { renderForm }
        </Formik>
    )
}

export default ReviewForm
