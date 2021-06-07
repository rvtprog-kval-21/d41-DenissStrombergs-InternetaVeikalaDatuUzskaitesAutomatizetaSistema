import { BooleanInput, Edit, SimpleForm, TextInput, required } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'

export function BlockEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="code" validate={ required() } />
                <BooleanInput source="isEnabled" />
                <RichTextInput source="content" validate={ required() } />
            </SimpleForm>
        </Edit>
    )
}

export default BlockEdit
