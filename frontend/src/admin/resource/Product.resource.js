import { Create, Datagrid, Edit, EditButton, List, SimpleForm, TextField, TextInput } from 'react-admin'

export function ProductList(props) {
    return (
        <List { ...props }>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="name"/>
                <EditButton/>
            </Datagrid>
        </List>
    )
}

export function ProductCreate(props) {
    return (
        <Create { ...props } title="Create a product">
            <SimpleForm>
                <TextInput source="name"/>
            </SimpleForm>
        </Create>
    )
}

export function ProductEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled/>
                <TextInput source="name"/>
            </SimpleForm>
        </Edit>
    )
}
