import { BooleanField, Datagrid, EditButton, List, TextField } from 'react-admin'

export function AttributeList(props) {
    return (
        <List { ...props }>
            <Datagrid>
                <TextField source="id"/>
                <BooleanField source="isEnabled"/>
                <TextField source="code"/>
                <TextField source="label"/>
                <BooleanField source="isFilter"/>
                <EditButton />
            </Datagrid>
        </List>
    )
}

export default AttributeList
