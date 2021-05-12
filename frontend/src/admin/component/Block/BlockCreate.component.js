import { BooleanInput, Create, SimpleForm, TextInput } from 'react-admin'

export function BlockCreate(props) {
    return (
        <Create { ...props } title="Create a block">
            <SimpleForm>
                <BooleanInput source="isEnabled"/>
                <TextInput source="code"/>
                <TextInput source="content"/>
            </SimpleForm>
        </Create>
    )
}

export default BlockCreate
