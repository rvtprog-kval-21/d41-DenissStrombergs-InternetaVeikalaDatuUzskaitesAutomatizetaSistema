import { useState } from 'react'
import { BooleanInput, Edit, SimpleForm, TextInput, useRefresh, useUpdate, Toolbar, required } from 'react-admin'
import AttributeOptionsInput from './AttributeOptionsInput.component'

export function AttributeEdit(props) {
    const [attributeOptions, setAttributeOptions] = useState()
    const [update, { loading, error }] = useUpdate()
    const refresh = useRefresh()

    const onSave = (data) => {
        const newData = {
            ...data,
            attributeOptions
        }

        update('Attribute', data.id, newData)

        if (!error && !loading) {
            refresh()
        }
    }

    return (
        <Edit { ...props }>
            <SimpleForm save={ onSave } toolbar={<Toolbar alwaysEnableSaveButton /> }>
                <TextInput source="id" disabled />
                <TextInput source="code" validate={ required() } />
                <BooleanInput source="isEnabled" />
                <TextInput source="label" validate={ required() } />
                <AttributeOptionsInput setAttributeOptions={ setAttributeOptions } />
                <BooleanInput source="isFilter" />
            </SimpleForm>
        </Edit>
    )
}

export default AttributeEdit
