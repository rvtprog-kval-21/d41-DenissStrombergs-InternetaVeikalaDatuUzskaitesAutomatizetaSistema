import { BooleanInput, Datagrid, DeleteButton, Edit, ReferenceField, ReferenceManyField, SimpleForm, TextField, TextInput, required } from 'react-admin'
import AttributeSetAttributeCreateButton from './AttributeSetAttributeCreateButton.component'

export function AttributeSetEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled/>
                <BooleanInput source="isEnabled"/>
                <TextInput source="name" validate={ required() } />
                <AttributeSetAttributeCreateButton />
                <ReferenceManyField
                    source="id"
                    target="attribute_set_id"
                    reference="AttributeSetAttribute"
                >
                    <Datagrid>
                        <ReferenceField source="attribute_id" reference="Attribute">
                            <TextField source="label" />
                        </ReferenceField>
                        <DeleteButton redirect={ false } />
                    </Datagrid>
                </ReferenceManyField>
            </SimpleForm>
        </Edit>
    )
}

export default AttributeSetEdit
