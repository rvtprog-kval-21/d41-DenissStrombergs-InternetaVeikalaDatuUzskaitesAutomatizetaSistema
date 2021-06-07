import { Edit, SimpleForm, TextInput, required, email } from 'react-admin'

export function UserEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="username" validate={ required() } />
                <TextInput source="email" type="email" validate={ [required(), email()] } />
                <TextInput source="firstName" validate={ required() } />
                <TextInput source="lastName" validate={ required() } />
            </SimpleForm>
        </Edit>
    )
}

export default UserEdit
