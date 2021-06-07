import { Create, PasswordInput, SimpleForm, TextInput, required, email } from 'react-admin'

export function CustomerCreate(props) {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="email" validate={ [required(), email()] } />
                <PasswordInput source="password" validate={ required() } />
                <TextInput source="firstName" validate={ required() } />
                <TextInput source="lastName" validate={ required() } />
            </SimpleForm>
        </Create>
    )
}

export default CustomerCreate
