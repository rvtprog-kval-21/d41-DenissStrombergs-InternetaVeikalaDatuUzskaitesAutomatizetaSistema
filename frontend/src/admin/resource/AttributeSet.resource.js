import { BooleanField, BooleanInput, Create, Datagrid, Edit, EditButton, List, SimpleForm, TextField, TextInput } from 'react-admin'

export function AttributeSetList(props) {
    return (
        <List { ...props }>
            <Datagrid>
                <TextField source="id"/>
                <BooleanField source="isEnabled"/>
                <TextField source="name"/>
                <EditButton/>
            </Datagrid>
        </List>
    )
}

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
