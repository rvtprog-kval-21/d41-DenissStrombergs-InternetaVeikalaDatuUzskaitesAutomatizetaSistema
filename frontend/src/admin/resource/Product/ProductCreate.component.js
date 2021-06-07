import { BooleanInput, Create, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput, required } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'
import { ProductSpecialDiscountTypeInput } from './ProductSpecialDiscountTypeInput.component'

export function ProductCreate(props) {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="urlKey" validate={ required() } />
                <TextInput source="sku" validate={ required() } />
                <BooleanInput source="isEnabled" />
                <TextInput source="name" validate={ required() } />
                <NumberInput source="price" validate={ required() } />
                <NumberInput source="stockQuantity" validate={ required() } />
                <ProductSpecialDiscountTypeInput />
                <NumberInput source="specialDiscountValue" />
                <NumberInput source="specialTaxRate" />
                <TextInput source="shortDescription" />
                <RichTextInput source="longDescription" />
                <ReferenceInput source="attribute_set_id" reference="AttributeSet" validate={ required() }>
                    <SelectInput source="name" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    )
}

export default ProductCreate
