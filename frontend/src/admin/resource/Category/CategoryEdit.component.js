import { BooleanInput, Edit, SimpleForm, TextInput, required } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'

export function CategoryEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="urlKey" validate={ required() } />
                <BooleanInput source="isEnabled" />
                <TextInput source="name" validate={ required() } />
                <BooleanInput source="isInMenu" />
                <RichTextInput source="content" />
            </SimpleForm>
        </Edit>
    )
}

export default CategoryEdit
