import { BooleanInput, Edit, SimpleForm, TextInput } from 'react-admin'

export function AttributeSetEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled/>
                <BooleanInput source="isEnabled"/>
                <TextInput source="name"/>
            </SimpleForm>
        </Edit>
    )
}

export default AttributeSetEdit
