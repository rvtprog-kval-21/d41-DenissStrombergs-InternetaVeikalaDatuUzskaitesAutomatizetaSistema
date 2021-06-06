import { Datagrid, DateInput, Edit, NumberField, NumberInput, ReferenceField, ReferenceManyField, SimpleForm, TextField, TextInput } from 'react-admin'
import AddressField from '../Address/AddressField.component'
import CustomerField from '../Customer/CustomerField.component'
import OrderStatusInput from './OrderStatusInput.component'

export function OrderEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="reference" disabled />
                <DateInput source="date" disabled />
                <OrderStatusInput />
                <NumberInput source="totalDelivery" disabled />
                <NumberInput source="totalTax" disabled />
                <NumberInput source="subtotal" disabled />
                <NumberInput source="total" disabled />
                <ReferenceManyField
                    source="id"
                    target="order_id"
                    reference="OrderItem"
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
                <ReferenceField source="customer_id" reference="Customer">
                    <CustomerField />
                </ReferenceField>
                <ReferenceField source="address_id" reference="Address" fullWidth link={ false }>
                    <AddressField />
                </ReferenceField>
            </SimpleForm>
        </Edit>
    )
}

export default OrderEdit
