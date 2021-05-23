import { useSelector } from 'react-redux'
import { DataGrid } from '@material-ui/data-grid'
import { GetAllCustomerReviews } from '../../query/Review.query'
import { Button, Typography } from '@material-ui/core'

export function AccountReviewList() {
    const { id } = useSelector((state) => state.AccountReducer)
    const reviews = GetAllCustomerReviews({ customerId: id })

    if (!reviews) {
        return null
    }

    const columns = [
        {
            field: 'product',
            headerName: 'Product',
            valueGetter: (params) => (
                params?.row?.product?.name
            )
        },
        {
            field: 'status',
            headerName: 'Status'
        },
        {
            field: 'date',
            headerName: 'Date'
        },
        {
            field: 'title',
            headerName: 'Title'
        },
        {
            field: 'rating',
            headerName: 'Rating'
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
        <div>
            <Typography variant="h5">Reviews</Typography>
            <DataGrid columns={ columns } rows={ reviews } autoHeight hideFooterPagination disableSelectionOnClick />
        </div>
    )
}

export default AccountReviewList
