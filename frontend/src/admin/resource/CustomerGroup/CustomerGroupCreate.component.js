import { Create, SimpleForm, TextInput } from 'react-admin'

export function CustomerGroupCreate(props) {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="code" />
                <TextInput source="name" />
            </SimpleForm>
        </Create>
    )
}

export default CustomerGroupCreate
