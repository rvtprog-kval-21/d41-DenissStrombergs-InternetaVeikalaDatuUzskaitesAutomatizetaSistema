import * as React from 'react'
import {
    Datagrid,
    Edit,
    EditButton,
    NumberField,
    ReferenceManyField,
    SimpleForm,
    TextInput,
    TextField,
    BooleanInput
} from 'react-admin'

//import ThumbnailField from '../products/ThumbnailField'
//import ProductRefField from '../products/ProductRefField'

function CategoryEdit(props) {
    return (
        <Edit {...props} title="Category">
            <SimpleForm>
                <TextInput source="id" disabled />
                <BooleanInput source="isEnabled" />
                <TextInput source="urlKey" />
                <TextInput source="name" />
                <BooleanInput source="isInMenu" />
                <ReferenceManyField
                    reference="Product"
                    target="CategoryId"
                    label="Products"
                    perPage={ 20 }
                    fullWidth
                >
                    <Datagrid>
                        { /*<ThumbnailField />*/ }
                        { /*<ProductRefField source="reference" />*/ }
                        <TextField source="name"/>
                        <NumberField
                            source="price"
                            options={{ style: 'currency', currency: 'USD' }}
                        />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </SimpleForm>
        </Edit>
    )
}

export default CategoryEdit


/*
                    <NumberField source="sales" />

                    <NumberField
                        source="name"
                        options={{ minimumFractionDigits: 2 }}
                    />
                    <NumberField
                        source="price"
                        options={{ minimumFractionDigits: 2 }}
                    />
                    <NumberField source="stock" /

*/