import { Edit, SimpleForm, TextInput } from 'react-admin'

export function PageEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled/>
                <TextInput source="urlKey"/>
                <TextInput source="title"/>
                <TextInput source="content"/>
            </SimpleForm>
        </Edit>
    )
}

export default PageEdit
