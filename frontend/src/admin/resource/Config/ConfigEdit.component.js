import { Edit, SimpleForm, TextInput, required } from 'react-admin'

export function ConfigEdit(props) {
    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="currencySign" validate={ required() } fullWidth />
            </SimpleForm>
        </Edit>
    )
}

export default ConfigEdit
