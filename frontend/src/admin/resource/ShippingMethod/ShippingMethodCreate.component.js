import { Create, SimpleForm, TextInput, required } from 'react-admin'

export function ShippingMethodCreate(props) {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="code" validate={ required() } />
                <TextInput source="name" validate={ required() } />
            </SimpleForm>
        </Create>
    )
}

export default ShippingMethodCreate
