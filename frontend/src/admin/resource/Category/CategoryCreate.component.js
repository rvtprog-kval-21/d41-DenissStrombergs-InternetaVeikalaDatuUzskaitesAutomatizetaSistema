import { BooleanInput, Create, SimpleForm, TextInput, required } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'

export function CategoryCreate(props) {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="urlKey" validate={ required() } fullWidth />
                <BooleanInput source="isEnabled" fullWidth />
                <TextInput source="name" validate={ required() } fullWidth />
                <BooleanInput source="isInMenu" fullWidth />
                <RichTextInput source="content" fullWidth />
            </SimpleForm>
        </Create>
    )
}

export default CategoryCreate
