import { BooleanField, Datagrid, EditButton, List, TextField } from 'react-admin'

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

export default BlockList
