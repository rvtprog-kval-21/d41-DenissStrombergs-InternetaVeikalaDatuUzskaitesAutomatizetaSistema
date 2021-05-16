import { Create, PasswordInput, SimpleForm, TextInput } from 'react-admin'

export function CustomerCreate(props) {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="email" />
                <PasswordInput source="password" />
                <TextInput source="firstName" />
                <TextInput source="lastName" />
            </SimpleForm>
        </Create>
    )
}

export default CustomerCreate
