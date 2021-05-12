import { BooleanInput, Edit, SimpleForm, TextInput } from 'react-admin'

export function BlockEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled/>
                <BooleanInput source="isEnabled"/>
                <TextInput source="code"/>
                <TextInput source="content"/>
            </SimpleForm>
        </Edit>
    )
}

export default BlockEdit
