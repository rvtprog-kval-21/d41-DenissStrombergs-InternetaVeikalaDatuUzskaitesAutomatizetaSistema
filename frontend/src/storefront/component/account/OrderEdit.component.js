import { GetCustomerOrder } from '../../query/Order.query'
import OrderForm from './OrderForm.component'

export function OrderEdit(props) {
    const { id } = props
    const order = GetCustomerOrder({ id })

    if (!order) {
        return null
    }

    return (
        <OrderForm order={ order } />
    )
}

export default OrderEdit
