import { Create, SimpleForm, TextInput } from 'react-admin'

export function ProductCreate(props) {
    return (
        <Create { ...props } title="Create a product">
            <SimpleForm>
                <TextInput source="name"/>
            </SimpleForm>
        </Create>
    )
}

export default ProductCreate
