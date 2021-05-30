import { Edit, SimpleForm, TextInput } from 'react-admin'
import CustomerCustomerGroupCreateButton from './CustomerCustomerGroupCreateButton.component'
import CustomerCustomerGroupInput from './CustomerCustomerGroupInput.component'

export function CustomerEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="email" />
                <TextInput source="firstName" />
                <TextInput source="lastName" />
                <CustomerCustomerGroupCreateButton />
                <CustomerCustomerGroupInput />
            </SimpleForm>
        </Edit>
    )
}

export default CustomerEdit
