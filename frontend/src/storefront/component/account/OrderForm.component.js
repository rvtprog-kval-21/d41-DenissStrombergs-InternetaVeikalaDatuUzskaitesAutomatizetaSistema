import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'

export function OrderForm(props) {
    const { order } = props

    const renderForm = () => {
        return (
            <Form>
                <Field
                    component={ TextField }
                    type="text"
                    name="reference"
                    label="Reference"
                    fullWidth
                    disabled
                />
                <Field
                    component={ TextField }
                    type="text"
                    name="date"
                    label="Date"
                    fullWidth
                    disabled
                />
                <Field
                    component={ TextField }
                    type="text"
                    name="status"
                    label="Status"
                    fullWidth
                    disabled
                />
                <Field
                    component={ TextField }
                    type="text"
                    name="totalDelivery"
                    label="Total delivery"
                    fullWidth
                    disabled
                />
                <Field
                    component={ TextField }
                    type="text"
                    name="totalTax"
                    label="Total tax"
                    fullWidth
                    disabled
                />
                <Field
                    component={ TextField }
                    type="text"
                    name="subtotal"
                    label="Subtotal"
                    fullWidth
                    disabled
                />
                <Field
                    component={ TextField }
                    type="text"
                    name="total"
                    label="Total"
                    fullWidth
                    disabled
                />
            </Form>
        )
    }

    return (
        <Formik
            initialValues={ order }
        >
            { renderForm }
        </Formik>
    )
}

export default OrderForm
