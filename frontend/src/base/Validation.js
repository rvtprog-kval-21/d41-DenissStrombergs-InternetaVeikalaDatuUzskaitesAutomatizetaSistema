import * as Yup from 'yup'

export const VALIDATION = {
    REVIEW: Yup.object().shape({
        title: Yup.string().required('Is required!'),
        content: Yup.string().required('Is required!'),
        rating: Yup.number().required('Is required!')
    })
}

export default VALIDATION
