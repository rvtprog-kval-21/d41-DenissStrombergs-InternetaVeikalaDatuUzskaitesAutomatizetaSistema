import { BooleanInput, Create, SimpleForm, TextInput, required } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'

export function CategoryCreate(props) {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="urlKey" validate={ required() } />
                <BooleanInput source="isEnabled" />
                <TextInput source="name" validate={ required() } />
                <BooleanInput source="isInMenu" />
                <RichTextInput source="content" />
            </SimpleForm>
        </Create>
    )
}

export default CategoryCreate
