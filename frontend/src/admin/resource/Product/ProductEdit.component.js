import { BooleanInput, Edit, NumberInput, SimpleForm, TextInput, ImageField, ImageInput, Toolbar, useUpdate, useRefresh, required, ReferenceInput, SelectInput } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'
import { ProductSpecialDiscountTypeInput } from './ProductSpecialDiscountTypeInput.component'
import ProductAttributeValuesInput from './ProductAttributeValuesInput.component'
import ProductCategoryInput from './ProductCategoryInput.component'
import ProductCategoryCreateButton from './ProductCategoryCreateButton.component'
import { useState } from 'react'
import { UPLOAD_MEDIA } from '../../../storefront/query/Product.query'
import { CONFIG } from '../../../base/Config'

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
})

export function ProductEdit(props) {
    const [attributeValues, setAttributeValues] = useState(null)
    const [update, { loading, error }] = useUpdate()
    const refresh = useRefresh()

    const onSave = (data) => {
        const newData = {
            ...data,
            attributeValues: attributeValues ? attributeValues : data.attributeValues
        }

        update('Product', data.id, newData)

        if (!error && !loading) {
            refresh()
        }
    }

    const getFilesFromEvent = async (event) => {
        const [file] = event.dataTransfer ? event.dataTransfer.files : event.target.files;

        if (!file.type.startsWith('image/')) {
            return []
        }

        const url = await fetch(CONFIG.API + '/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                query: UPLOAD_MEDIA,
                variables: { data: await toBase64(file).catch(e => Error(e)), name: file.name }
            })
        }).then((data) => data.json()).then(({ data }) => data?.url)

        return [{
            url,
            type: file.type
        }]
    }

    const validate = (attributeValues) => {
        setAttributeValues(attributeValues)
    }

    return (
        <Edit { ...props }>
            <SimpleForm save={ onSave } toolbar={ <Toolbar alwaysEnableSaveButton /> }>
                <TextInput source="id" disabled />
                <TextInput source="urlKey" validate={ required() } />
                <TextInput source="sku" validate={ required() } />
                <BooleanInput source="isEnabled" />
                <TextInput source="name" validate={ required() } />
                <NumberInput source="price" validate={ required() } />
                <NumberInput source="stockQuantity" validate={ required() } />
                <NumberInput source="soldAmount" disabled />
                <ProductSpecialDiscountTypeInput />
                <NumberInput source="specialDiscountValue" />
                <NumberInput source="specialTaxRate" />
                <TextInput source="shortDescription" />
                <RichTextInput source="longDescription" />
                <ImageInput source="base_image" options={ { getFilesFromEvent } } accept="image/*">
                    <ImageField source="url" />
                </ImageInput>
                <ImageInput source="thumbnail_image" options={ { getFilesFromEvent } } accept="image/*">
                    <ImageField source="url" />
                </ImageInput>
                <ImageInput source="other_images" multiple options={ { getFilesFromEvent } } accept="image/*">
                    <ImageField source="url" />
                </ImageInput>
                <ReferenceInput source="attribute_set_id" reference="AttributeSet" validate={ required() }>
                    <SelectInput source="name" />
                </ReferenceInput>
                <ProductAttributeValuesInput attributeValues={ attributeValues } validate={ validate } />
                <ProductCategoryCreateButton />
                <ProductCategoryInput />
            </SimpleForm>
        </Edit>
    )
}

export default ProductEdit
