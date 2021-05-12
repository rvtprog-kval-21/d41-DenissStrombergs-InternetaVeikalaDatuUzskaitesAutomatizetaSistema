import { Datagrid, EditButton, List, TextField } from 'react-admin'

export function ReviewList(props) {
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

export default ReviewList
