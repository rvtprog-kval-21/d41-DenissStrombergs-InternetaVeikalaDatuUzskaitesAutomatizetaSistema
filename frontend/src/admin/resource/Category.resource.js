import { BooleanField, BooleanInput, Create, Datagrid, Edit, EditButton, List, NumberField, SimpleForm, TextField, TextInput } from 'react-admin'

export function CategoryList(props) {
    return (
        <List { ...props }>
            <Datagrid>
                <TextField source="id"/>
                <BooleanField source="isEnabled"/>
                <TextField source="urlKey"/>
                <TextField source="name"/>
                <NumberField source="productCount"/>
                <BooleanField source="isInMenu"/>
                <EditButton/>
            </Datagrid>
        </List>
    )
}

export function CategoryCreate(props) {
    return (
        <Create { ...props } title="Create an category">
            <SimpleForm>
                <BooleanInput source="isEnabled"/>
                <TextInput source="urlKey"/>
                <TextInput source="name"/>
                <BooleanInput source="isInMenu"/>
            </SimpleForm>
        </Create>
    )
}

export function CategoryEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled/>
                <BooleanInput source="isEnabled"/>
                <TextInput source="urlKey"/>
                <TextInput source="name"/>
                <BooleanInput source="isInMenu"/>
            </SimpleForm>
        </Edit>
    )
}
