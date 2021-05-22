import { BooleanInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'

export function CategoryEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="urlKey" />
                <BooleanInput source="isEnabled" />
                <TextInput source="name" />
                <BooleanInput source="isInMenu" />
                <RichTextInput source="content" />
            </SimpleForm>
        </Edit>
    )
}

export default CategoryEdit
