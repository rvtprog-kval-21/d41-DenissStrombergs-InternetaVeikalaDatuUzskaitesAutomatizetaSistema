import { Edit, SimpleForm, TextInput } from 'react-admin'

export function ReviewEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled/>
                <TextInput source="content"/>
            </SimpleForm>
        </Edit>
    )
}

export default ReviewEdit
