import { Edit, SimpleForm, TextInput } from 'react-admin'

export function ConfigEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="currencySign" />
            </SimpleForm>
        </Edit>
    )
}

export default ConfigEdit
