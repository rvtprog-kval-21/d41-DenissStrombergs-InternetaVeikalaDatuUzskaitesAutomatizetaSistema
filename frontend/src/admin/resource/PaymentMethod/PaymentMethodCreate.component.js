import { Create, SimpleForm, TextInput, required } from 'react-admin'

export function PaymentMethodCreate(props) {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="code" validate={ required() } />
                <TextInput source="name" validate={ required() } />
            </SimpleForm>
        </Create>
    )
}

export default PaymentMethodCreate
