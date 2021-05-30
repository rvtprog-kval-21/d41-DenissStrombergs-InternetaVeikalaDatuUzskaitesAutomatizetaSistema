import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin'
import OrderField from '../Order/OrderField.component'

export function InvoiceShow(props) {
    return (
        <Show { ...props }>
            <SimpleShowLayout>
                <TextField source="id" />
                <DateField source="date" />
                <NumberField source="totalDelivery" />
                <NumberField source="totalTax" />
                <NumberField source="subtotal" />
                <NumberField source="total" />
                <ReferenceField source="order_id" reference="Order">
                    <OrderField />
                </ReferenceField>
            </SimpleShowLayout>
        </Show>
    )
}

export default InvoiceShow
