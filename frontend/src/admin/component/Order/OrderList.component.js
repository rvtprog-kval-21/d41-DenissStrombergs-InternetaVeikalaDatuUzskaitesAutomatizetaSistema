import { Datagrid, List, TextField } from 'react-admin'

export function OrderList(props) {
    return (
        <List { ...props }>
            <Datagrid>
                <TextField source="id"/>
            </Datagrid>
        </List>
    )
}

export default OrderList
