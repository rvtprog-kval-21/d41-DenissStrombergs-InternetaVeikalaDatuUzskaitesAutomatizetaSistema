import { Edit, SimpleForm, TextInput } from 'react-admin'

export function ProductEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled/>
                <TextInput source="name"/>
            </SimpleForm>
        </Edit>
    )
}

export default ProductEdit
