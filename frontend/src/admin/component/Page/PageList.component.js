import { Datagrid, EditButton, List, TextField } from 'react-admin'

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

export default PageList
