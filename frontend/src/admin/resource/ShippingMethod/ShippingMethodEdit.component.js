import { Edit, SimpleForm, TextInput } from 'react-admin'

export function ShippingMethodEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="code" />
                <TextInput source="name" />
            </SimpleForm>
        </Edit>
    )
}

export default ShippingMethodEdit
