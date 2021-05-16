import { BooleanInput, Edit, SimpleForm, TextInput } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'

export function BlockEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="code" />
                <BooleanInput source="isEnabled" />
                <RichTextInput source="content" />
            </SimpleForm>
        </Edit>
    )
}

export default BlockEdit
