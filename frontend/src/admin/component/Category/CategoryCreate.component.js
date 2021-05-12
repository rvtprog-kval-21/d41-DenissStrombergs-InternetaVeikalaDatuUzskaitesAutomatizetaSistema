import { BooleanInput, Create, SimpleForm, TextInput } from 'react-admin'

export function CategoryCreate(props) {
    return (
        <Create { ...props } title="Create a category">
            <SimpleForm>
                <BooleanInput source="isEnabled" />
                <TextInput source="urlKey" />
                <TextInput source="name" />
                <BooleanInput source="isInMenu" />
            </SimpleForm>
        </Create>
    )
}

export default CategoryCreate
