import { BooleanField, BooleanInput, Create, Datagrid, Edit, EditButton, List, SimpleForm, TextField, TextInput } from 'react-admin'

export function BlockList(props) {
    return (
        <List { ...props }>
            <Datagrid>
                <TextField source="id"/>
                <BooleanField source="isEnabled"/>
                <TextField source="code"/>
                <EditButton/>
            </Datagrid>
        </List>
    )
}

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

export function BlockEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled/>
                <BooleanInput source="isEnabled"/>
                <TextInput source="code"/>
                <TextInput source="content"/>
            </SimpleForm>
        </Edit>
    )
}
