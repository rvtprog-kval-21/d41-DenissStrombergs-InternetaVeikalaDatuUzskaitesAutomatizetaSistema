import { Datagrid, EditButton, List, TextField } from 'react-admin'

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

export default ProductList
