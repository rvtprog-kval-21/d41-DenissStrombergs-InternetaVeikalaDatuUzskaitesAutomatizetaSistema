import { Edit, SimpleForm, TextInput, required, email } from 'react-admin'
import CustomerCustomerGroupCreateButton from './CustomerCustomerGroupCreateButton.component'
import CustomerCustomerGroupInput from './CustomerCustomerGroupInput.component'

export function CustomerEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled fullWidth />
                <TextInput source="email" validate={ [required(), email()] } fullWidth />
                <TextInput source="firstName" validate={ required() } fullWidth />
                <TextInput source="lastName" validate={ required() } fullWidth />
                <CustomerCustomerGroupCreateButton />
                <CustomerCustomerGroupInput />
            </SimpleForm>
        </Edit>
    )
}

export default CustomerEdit
