import { Create, SimpleForm, TextInput } from 'react-admin'

export function PaymentMethodCreate(props) {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="code" />
                <TextInput source="name" />
            </SimpleForm>
        </Create>
    )
}

export default PaymentMethodCreate
