import { BooleanInput, Create, SimpleForm, TextInput } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'

export function BlockCreate(props) {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="code" />
                <BooleanInput source="isEnabled" />
                <RichTextInput source="content" />
            </SimpleForm>
        </Create>
    )
}

export default BlockCreate
