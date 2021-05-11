import { Create, Datagrid, Edit, EditButton, List, SimpleForm, TextField, TextInput } from 'react-admin'

export function PageList(props) {
    return (
        <List { ...props }>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="urlKey"/>
                <TextField source="title"/>
                <EditButton/>
            </Datagrid>
        </List>
    )
}

export function PageCreate(props) {
    return (
        <Create { ...props } title="Create a page">
            <SimpleForm>
                <TextInput source="urlKey"/>
                <TextInput source="title"/>
                <TextInput source="content"/>
            </SimpleForm>
        </Create>
    )
}

export function PageEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled/>
                <TextInput source="urlKey"/>
                <TextInput source="title"/>
                <TextInput source="content"/>
            </SimpleForm>
        </Edit>
    )
}
