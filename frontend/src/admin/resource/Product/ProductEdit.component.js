import { BooleanInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput, SelectInput } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'
import { ProductSpecialDiscountTypeInput } from './ProductSpecialDiscountTypeInput.component'
import ProductAttributeValueInput from './ProductAttributeValuesInput.component'
import ProductMediaInput from './ProductMediaInput.component'
import ProductCategoryInput from './ProductCategoryInput.component'
import ProductCategoryCreateButton from './ProductCategoryCreateButton.component'

export function ProductEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled />
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
                <ProductMediaInput />
                <ProductCategoryCreateButton />
                <ProductCategoryInput />
                <ProductAttributeValueInput />
            </SimpleForm>
        </Edit>
    )
}

export default ProductEdit
