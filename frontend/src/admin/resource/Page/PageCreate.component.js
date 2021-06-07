import { BooleanInput, Create, SimpleForm, TextInput, required } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'

export function PageCreate(props) {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="urlKey" validate={ required() } />
                <BooleanInput source="isEnabled" />
                <TextInput source="title" validate={ required() } />
                <RichTextInput source="content" />
            </SimpleForm>
        </Create>
    )
}

export default PageCreate
