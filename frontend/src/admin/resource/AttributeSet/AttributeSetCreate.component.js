import { BooleanInput, Create, SimpleForm, TextInput, required } from 'react-admin'

export function AttributeSetCreate(props) {
    return (
        <Create { ...props } title="Create an attribute set">
            <SimpleForm>
                <BooleanInput source="isEnabled"/>
                <TextInput source="name" validate={ required() } />
            </SimpleForm>
        </Create>
    )
}

export default AttributeSetCreate
