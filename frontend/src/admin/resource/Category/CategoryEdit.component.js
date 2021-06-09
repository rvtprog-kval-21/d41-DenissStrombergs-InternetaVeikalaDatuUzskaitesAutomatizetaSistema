import { BooleanInput, Edit, SimpleForm, TextInput, required } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'

export function CategoryEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled fullWidth />
                <TextInput source="urlKey" validate={ required() } fullWidth />
                <BooleanInput source="isEnabled" fullWidth />
                <TextInput source="name" validate={ required() } fullWidth />
                <BooleanInput source="isInMenu" fullWidth />
                <RichTextInput source="content" fullWidth />
            </SimpleForm>
        </Edit>
    )
}

export default CategoryEdit
