import { BooleanInput, Edit, SimpleForm, TextInput, required } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'

export function PageEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="urlKey" validate={ required() } />
                <BooleanInput source="isEnabled" />
                <TextInput source="title" validate={ required() } />
                <RichTextInput source="content" />
            </SimpleForm>
        </Edit>
    )
}

export default PageEdit
