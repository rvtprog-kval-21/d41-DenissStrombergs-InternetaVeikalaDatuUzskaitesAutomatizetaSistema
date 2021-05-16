import { BooleanInput, Datagrid, DeleteButton, Edit, ReferenceField, ReferenceManyField, SimpleForm, TextField, TextInput } from 'react-admin'

export function AttributeSetEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled/>
                <BooleanInput source="isEnabled"/>
                <TextInput source="name"/>
                <ReferenceManyField
                    source="AttributesIds"
                    target="ids"
                    reference="Attribute"
                >
                    <Datagrid>
                        <TextField source="label" />
                        <DeleteButton redirect={ false } />
                    </Datagrid>
                </ReferenceManyField>
            </SimpleForm>
        </Edit>
    )
}

export default AttributeSetEdit
