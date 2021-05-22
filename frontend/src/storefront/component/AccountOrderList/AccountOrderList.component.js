import { useSelector } from 'react-redux'
import { GetAllOrders } from '../../query/Order.query'
import { DataGrid } from '@material-ui/data-grid'
import { Button } from '@material-ui/core'

export function AccountOrderList() {
    const { id } = useSelector((state) => state.AccountReducer)
    const orders = GetAllOrders({ customerId: id })

    if (!orders) {
        return null
    }

    const columns = [
        {
            field: 'reference',
            headerName: 'Reference'
        },
        {
            field: 'date',
            headerName: 'Date'
        },
        {
            field: 'status',
            headerName: 'Status'
        },
        {
            field: 'totalDelivery',
            headerName: 'Total delivery'
        },
        {
            field: 'totalTax',
            headerName: 'Total tax'
        },
        {
            field: 'subtotal',
            headerName: 'Subtotal'
        },
        {
            field: 'total',
            headerName: 'Total'
        },
        {
            field: 'view',
            headerName: 'View',
            renderCell: () => (
                <Button onClick={ () => console.log('edit') } variant="contained" color="primary">
                    View
                </Button>
            )
        }
    ]

    return (
        <DataGrid columns={ columns } rows={ orders } autoHeight hideFooterPagination disableSelectionOnClick />
    )
}

export default AccountOrderList
