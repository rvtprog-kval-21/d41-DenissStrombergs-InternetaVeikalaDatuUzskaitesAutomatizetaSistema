import { Create, SimpleForm, TextInput } from 'react-admin'

export function ReviewCreate(props) {
    return (
        <Create { ...props } title="Create a review">
            <SimpleForm>
                <TextInput source="content"/>
            </SimpleForm>
        </Create>
    )
}

export default ReviewCreate
