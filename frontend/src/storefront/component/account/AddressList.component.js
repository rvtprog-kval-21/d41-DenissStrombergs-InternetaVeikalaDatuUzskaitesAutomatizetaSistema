import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import { GetAllAddresses } from '../../query/Address.query'
import AddressItem from './AddressItem.component'

export function AddressList() {
    const { id } = useSelector((state) => state.AccountReducer)
    const addresses = GetAllAddresses({ customerId: id })

    if (!addresses) {
        return null
    }

    const renderAddressItem = (address) => {
        return (
            <AddressItem address={ address } />
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
            { addresses.map(renderAddressItem)  }
        </Grid>
    )
}

export default AddressList
