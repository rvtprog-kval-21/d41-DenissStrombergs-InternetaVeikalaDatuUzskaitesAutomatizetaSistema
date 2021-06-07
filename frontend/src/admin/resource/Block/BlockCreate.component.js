import { BooleanInput, Create, SimpleForm, TextInput, required } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'

export function BlockCreate(props) {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="code" validate={ required() } />
                <BooleanInput source="isEnabled" />
                <RichTextInput source="content" validate={ required() } />
            </SimpleForm>
        </Create>
    )
}

export default BlockCreate
