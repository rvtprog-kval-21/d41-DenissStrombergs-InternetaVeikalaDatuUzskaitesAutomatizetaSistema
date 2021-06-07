import { Edit, SimpleForm, TextInput, required, email } from 'react-admin'
import CustomerCustomerGroupCreateButton from './CustomerCustomerGroupCreateButton.component'
import CustomerCustomerGroupInput from './CustomerCustomerGroupInput.component'

export function CustomerEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="email" validate={ [required(), email()] } />
                <TextInput source="firstName" validate={ required() } />
                <TextInput source="lastName" validate={ required() } />
                <CustomerCustomerGroupCreateButton />
                <CustomerCustomerGroupInput />
            </SimpleForm>
        </Edit>
    )
}

export default CustomerEdit
