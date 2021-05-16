import { BooleanInput, Edit, SimpleForm, TextInput } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'

export function PageEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="urlKey" />
                <BooleanInput source="isEnabled" />
                <TextInput source="title" />
                <RichTextInput source="content" />
            </SimpleForm>
        </Edit>
    )
}

export default PageEdit
