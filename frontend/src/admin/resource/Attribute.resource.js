import { BooleanField, BooleanInput, Create, Datagrid, Edit, EditButton, List, ReferenceArrayInput, ReferenceInput, SelectArrayInput, SimpleForm, TextField, TextInput } from 'react-admin'

export function AttributeList(props) {
    return (
        <List { ...props }>
            <Datagrid>
                <TextField source="id"/>
                <BooleanField source="isEnabled"/>
                <TextField source="code"/>
                <TextField source="label"/>
                <BooleanField source="isFilter"/>
                <EditButton />
            </Datagrid>
        </List>
    )
}

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
