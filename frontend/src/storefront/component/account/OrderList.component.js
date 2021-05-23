import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import { GetAllOrders } from '../../query/Order.query'
import OrderItem from './OrderItem.component'

export function OrderList() {
    const { id } = useSelector((state) => state.AccountReducer)
    const orders = GetAllOrders({ customerId: id })

    if (!orders) {
        return null
    }

    const renderOrderItem = (order) => {
        return (
            <OrderItem order={ order } />
        )
    }

    return (
        <Grid
            container
            direction="row"
            justify="start"
            alignItems="center"
            spacing={ 4 }
        >
            { orders.map(renderOrderItem) }
        </Grid>
    )
}

export default OrderList
