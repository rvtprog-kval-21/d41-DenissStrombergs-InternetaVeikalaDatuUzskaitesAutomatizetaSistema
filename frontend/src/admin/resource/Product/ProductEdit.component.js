import { BooleanInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput, SelectInput } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'
import { ProductTypeInput } from './ProductTypeInput.component'
import { ProductSpecialDiscountTypeInput } from './ProductSpecialDiscountTypeInput.component'

export function ProductEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled />
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
                <ReferenceInput source="attribute_set_id" reference="AttributeSet">
                    <SelectInput source="name" />
                </ReferenceInput>
                <TextInput source="attributeValues" />
                <TextInput source="variations" />
            </SimpleForm>
        </Edit>
    )
}

export default ProductEdit
