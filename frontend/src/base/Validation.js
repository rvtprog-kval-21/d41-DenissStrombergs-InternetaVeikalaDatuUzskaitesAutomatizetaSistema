import * as Yup from 'yup'

export const VALIDATION = {
    REVIEW: Yup.object().shape({
        title: Yup.string().required('Is required!'),
        content: Yup.string().required('Is required!'),
        rating: Yup.number().required('Is required!')
    }),
    ADDRESS: Yup.object().shape({
        firstName: Yup.string().required('Is required'),
        lastName: Yup.string().required('Is required'),
        phoneNumber: Yup.string().required('Is required'),
        country: Yup.string().required('Is required'),
        city: Yup.string().required('Is required'),
        province: Yup.string().required('Is required'),
        street1: Yup.string().required('Is required'),
        street2: Yup.string(),
        postalCode: Yup.string().required('Is required')
    }),
    ACCOUNT: Yup.object().shape({
        email: Yup.string().required('Is required'),
        firstName: Yup.string().required('Is required'),
        lastName: Yup.string().required('Is required'),
    }),
    SIGN_IN: Yup.object().shape({
        email: Yup.string().required('Is required'),
        password: Yup.string().required('Is required')
    }),
    SIGN_UP: Yup.object().shape({
        email: Yup.string().required('Is required'),
        password: Yup.string().required('Is required'),
        confirmPassword: Yup.string().required('Is required'),
        firstName: Yup.string().required('Is required'),
        lastName: Yup.string().required('Is required')
    }),
    PASSWORD: Yup.object().shape({
        oldPassword: Yup.string().required('Is required'),
        newPassword: Yup.string().required('Is required'),
        confirmNewPassword: Yup.string().required('Is required')
    }),
    SHIPPING_STEP: Yup.object().shape({
        shippingMethod: Yup.string().required('Is required')
    }),
    BILLING_STEP: Yup.object().shape({
        acceptTerms: Yup.string().required('Is required'),
        paymentMethod: Yup.string().required('Is required')
    })
}

export default VALIDATION
