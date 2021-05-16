import { DateField, NumberField, Show, SimpleShowLayout, TextField } from 'react-admin'

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
            </SimpleShowLayout>
        </Show>
    )
}

export default InvoiceShow
