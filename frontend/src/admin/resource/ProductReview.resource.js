import { Create, Datagrid, Edit, EditButton, List, SimpleForm, TextField, TextInput } from 'react-admin'

export function ProductReviewList(props) {
    return (
        <List { ...props }>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="content"/>
                <EditButton/>
            </Datagrid>
        </List>
    )
}

export function ProductReviewCreate(props) {
    return (
        <Create { ...props } title="Create a review">
            <SimpleForm>
                <TextInput source="content"/>
            </SimpleForm>
        </Create>
    )
}

export function ProductReviewEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled/>
                <TextInput source="content"/>
            </SimpleForm>
        </Edit>
    )
}
