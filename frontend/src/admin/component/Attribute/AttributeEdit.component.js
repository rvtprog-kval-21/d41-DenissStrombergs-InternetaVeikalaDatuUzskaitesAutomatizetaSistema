import { BooleanInput, Edit, ReferenceInput, SelectArrayInput, SimpleForm, TextInput } from 'react-admin'

export function AttributeEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled/>
                <BooleanInput source="isEnabled"/>
                <TextInput source="code"/>
                <TextInput source="label"/>
                <BooleanInput source="isFilter"/>
                <TextInput source="attributeOptions"/>
                <ReferenceInput source="id" reference="AttributeSet">
                    <SelectArrayInput optionText="name" />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    )
}

export default AttributeEdit
