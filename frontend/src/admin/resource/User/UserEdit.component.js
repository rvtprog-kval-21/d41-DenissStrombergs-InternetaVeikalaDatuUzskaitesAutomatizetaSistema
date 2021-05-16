import { Edit, PasswordInput, SimpleForm, TextInput } from 'react-admin'

export function UserEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="username" />
                <TextInput source="email" type="email" />
                <PasswordInput source="password" />
                <TextInput source="firstName" />
                <TextInput source="lastName" />
            </SimpleForm>
        </Edit>
    )
}

export default UserEdit
