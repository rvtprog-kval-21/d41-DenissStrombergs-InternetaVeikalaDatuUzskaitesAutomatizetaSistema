import React from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export function Account() {
    const validate = (values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }

    const onSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
    }

    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={ validate }
                onSubmit={ onSubmit }
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit}>
                    <TextField  error={ errors.email && touched.email } helperText={ errors.email } label="Email" placeholder="Email" fullWidth type="email" name="email" onChange={ handleChange } onBlur={ handleBlur } value={ values.email } />
                    <TextField error={ errors.password && touched.password } helperText={ errors.password } label="Password" placeholder="Password" fullWidth type="password" name="password" onChange={ handleChange } onBlur={ handleBlur } value={ values.password } />
                    {errors.password && touched.password && errors.password}
                    <Button type="submit" disabled={ isSubmitting } variant="contained" color="primary">Proceed to billing</Button>
                    </form>
                )}
            </Formik>
      </div>
    )
}

export default Account
