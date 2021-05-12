import { Create, SimpleForm, TextInput } from 'react-admin'

export function PageCreate(props) {
    return (
        <Create { ...props } title="Create a page">
            <SimpleForm>
                <TextInput source="urlKey"/>
                <TextInput source="title"/>
                <TextInput source="content"/>
            </SimpleForm>
        </Create>
    )
}

export default PageCreate
