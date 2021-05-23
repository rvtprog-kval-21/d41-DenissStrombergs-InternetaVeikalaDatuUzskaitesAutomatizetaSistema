import { useSelector } from 'react-redux'
import { DataGrid } from '@material-ui/data-grid'
import { Button, Typography } from '@material-ui/core'
import { GetAllAddresses } from '../../query/Address.query'

export function AccountAddressList() {
    const { id } = useSelector((state) => state.AccountReducer)
    const addresses = GetAllAddresses({ customerId: id })

    if (!addresses) {
        return null
    }

    const columns = [
        {
            field: 'firstName',
            headerName: 'First name'
        },
        {
            field: 'lastName',
            headerName: 'lastName'
        },
        {
            field: 'phoneNumber',
            headerName: 'Phone number'
        },
        {
            field: 'country',
            headerName: 'Country'
        },
        {
            field: 'city',
            headerName: 'City'
        },
        {
            field: 'province',
            headerName: 'Province'
        },
        {
            field: 'street1',
            headerName: 'Street 1'
        },
        {
            field: 'street2',
            headerName: 'Street 2'
        },
        {
            field: 'postalCode',
            headerName: 'Postal code'
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
            <Typography variant="h5">Settings</Typography>
            <DataGrid columns={ columns } rows={ addresses } autoHeight hideFooterPagination disableSelectionOnClick />
        </div>
    )
}

export default AccountAddressList
