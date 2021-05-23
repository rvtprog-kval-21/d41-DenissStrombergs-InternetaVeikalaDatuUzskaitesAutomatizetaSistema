import { GetAddress } from '../../query/Address.query'
import AddressForm from './AddressForm.component'

export function AddressEdit(props) {
    const { id } = props
    const address = GetAddress({ id })

    if (!address) {
        return null
    }

    return (
        <AddressForm address={ address } />
    )
}

export default AddressEdit
