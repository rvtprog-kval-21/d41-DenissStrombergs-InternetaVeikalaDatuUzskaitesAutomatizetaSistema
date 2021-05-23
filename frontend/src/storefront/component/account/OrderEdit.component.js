import { GetOrder } from '../../query/Order.query'
import OrderForm from './OrderForm.component'

export function OrderEdit(props) {
    const { id } = props
    const order = GetOrder({ id })

    if (!order) {
        return null
    }

    return (
        <OrderForm order={ order } />
    )
}

export default OrderEdit
