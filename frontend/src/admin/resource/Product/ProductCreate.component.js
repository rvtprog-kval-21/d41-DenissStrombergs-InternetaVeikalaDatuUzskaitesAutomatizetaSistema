import { BooleanInput, Create, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'
import { ProductTypeInput } from './ProductTypeInput.component'
import { ProductSpecialDiscountTypeInput } from './ProductSpecialDiscountTypeInput.component'

export function ProductCreate(props) {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="sku" />
                <BooleanInput source="isEnabled" />
                <ProductTypeInput { ...props } />
                <TextInput source="name" />
                <NumberInput source="price" />
                <NumberInput source="stockQuantity" />
                <ProductSpecialDiscountTypeInput />
                <NumberInput source="specialDiscountValue" />
                <NumberInput source="specialTaxRate" />
                <TextInput source="shortDescription" />
                <RichTextInput source="longDescription" />
                <ReferenceInput source="AttributeSetId" reference="AttributeSet">
                    <SelectInput source="name" />
                </ReferenceInput>
                <TextInput source="attributeValues" />
                <TextInput source="variations" />
            </SimpleForm>
        </Create>
    )
}

export default ProductCreate
