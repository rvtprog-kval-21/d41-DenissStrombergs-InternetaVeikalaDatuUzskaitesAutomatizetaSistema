import { BooleanInput, Create, SimpleForm, TextInput } from 'react-admin'

export function AttributeSetCreate(props) {
    return (
        <Create { ...props } title="Create an attribute set">
            <SimpleForm>
                <BooleanInput source="isEnabled"/>
                <TextInput source="name"/>
            </SimpleForm>
        </Create>
    )
}

export default AttributeSetCreate
