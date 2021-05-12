import { Edit, SimpleForm, TextInput } from 'react-admin'

export function CustomerEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled/>
                <TextInput source="firstName"/>
                <TextInput source="lastName"/>
            </SimpleForm>
        </Edit>
    )
}

export default CustomerEdit
