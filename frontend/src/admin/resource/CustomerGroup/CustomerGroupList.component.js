import { Datagrid, EditButton, List, TextField } from 'react-admin'

export function CustomerGroupList(props) {
    return (
        <List { ...props }>
            <Datagrid>
                <TextField source="id" />
                <TextField source="code" />
                <TextField source="name" />
                <EditButton />
            </Datagrid>
        </List>
    )
}

export default CustomerGroupList
