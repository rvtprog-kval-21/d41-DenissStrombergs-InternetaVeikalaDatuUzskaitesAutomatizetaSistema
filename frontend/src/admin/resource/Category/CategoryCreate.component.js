import { BooleanInput, Create, NumberInput, SimpleForm, TextInput } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'

export function CategoryCreate(props) {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="urlKey" />
                <BooleanInput source="isEnabled" />
                <TextInput source="name" />
                <NumberInput source="productCount" disabled />
                <BooleanInput source="isInMenu" />
                <RichTextInput source="content" />
            </SimpleForm>
        </Create>
    )
}

export default CategoryCreate
