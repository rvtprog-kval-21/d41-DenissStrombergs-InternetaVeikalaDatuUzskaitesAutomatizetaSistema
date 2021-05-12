import { BooleanInput, Create, ReferenceInput, SelectArrayInput, SimpleForm, TextInput } from 'react-admin'

export function AttributeCreate(props) {
    return (
        <Create { ...props } title="Create an attribute">
            <SimpleForm>
                <BooleanInput source="isEnabled"/>
                <TextInput source="code"/>
                <TextInput source="label"/>
                <BooleanInput source="isFilter"/>
                <TextInput source="attributeOptions"/>
                <ReferenceInput source="id" reference="AttributeSet">
                    <SelectArrayInput optionText="name" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    )
}

export default AttributeCreate
