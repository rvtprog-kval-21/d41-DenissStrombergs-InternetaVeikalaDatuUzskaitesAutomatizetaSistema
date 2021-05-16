import { BooleanInput, Datagrid, DateInput, Edit, NumberField, NumberInput, ReferenceField, ReferenceManyField, SimpleForm, TextField, TextInput } from 'react-admin'
import OrderStatusInput from './OrderStatusInput.component'

export function OrderEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="reference" disabled />
                <DateInput source="date" disabled />
                <OrderStatusInput />
                <BooleanInput source="isReturned" />
                <NumberInput source="totalDelivery" disabled />
                <NumberInput source="totalTax" disabled />
                <NumberInput source="subtotal" disabled />
                <NumberInput source="total" disabled />
                <ReferenceManyField
                    source="OrderItemIds"
                    target="ids"
                    reference="OrderItem"
                    fullWidth
                    label="Order items"
                >
                    <Datagrid>
                        <ReferenceField source="product_id" reference="Product">
                            <TextField source="name" />
                        </ReferenceField>
                        <NumberField source="quantity" />
                        <NumberField source="totalTax" />
                        <NumberField source="subtotal" />
                        <NumberField source="total" />
                    </Datagrid>
                </ReferenceManyField>
            </SimpleForm>
        </Edit>
    )
}

export default OrderEdit
