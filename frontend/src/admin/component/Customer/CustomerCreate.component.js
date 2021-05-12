import { Create, SimpleForm, TextInput } from 'react-admin'

export function CustomerCreate(props) {
    return (
        <Create { ...props } title="Create a Customer">
            <SimpleForm>
                <TextInput source="firstName"/>
                <TextInput source="lastName"/>
            </SimpleForm>
        </Create>
    )
}

export default CustomerCreate
