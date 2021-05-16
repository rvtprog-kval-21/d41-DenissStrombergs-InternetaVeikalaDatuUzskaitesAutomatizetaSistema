import { Create, PasswordInput, SimpleForm, TextInput } from 'react-admin'

export function UserCreate(props) {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="username" />
                <TextInput source="email" type="email" />
                <PasswordInput source="password" />
                <TextInput source="firstName" />
                <TextInput source="lastName" />
            </SimpleForm>
        </Create>
    )
}

export default UserCreate
