import { BooleanInput, Create, SimpleForm, TextInput } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'

export function PageCreate(props) {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="urlKey" />
                <BooleanInput source="isEnabled" />
                <TextInput source="title" />
                <RichTextInput source="content" />
            </SimpleForm>
        </Create>
    )
}

export default PageCreate
