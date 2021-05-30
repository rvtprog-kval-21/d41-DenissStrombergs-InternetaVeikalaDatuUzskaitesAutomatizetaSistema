import { BooleanInput, Create, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'
import { ProductSpecialDiscountTypeInput } from './ProductSpecialDiscountTypeInput.component'
import ProductAttributeValueInput from './ProductAttributeValuesInput.component'
import ProductMediaInput from './ProductMediaInput.component'
import ProductCategoryInput from './ProductCategoryInput.component'

export function ProductCreate(props) {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="sku" />
                <BooleanInput source="isEnabled" />
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
                <ProductMediaInput />
                <ProductCategoryInput />
                <ProductAttributeValueInput />
            </SimpleForm>
        </Create>
    )
}

export default ProductCreate
