import { useState } from 'react'
import { BooleanInput, Edit, SimpleForm, TextInput, useRefresh, useUpdate, Toolbar, required, showNotification } from 'react-admin'
import { useDispatch } from 'react-redux'
import AttributeOptionsInput from './AttributeOptionsInput.component'

export function AttributeEdit(props) {
    const dispatch = useDispatch()
    const [attributeOptions, setAttributeOptions] = useState([])
    const [update, { loading, error }] = useUpdate()

    const onSave = (data) => {
        if (attributeOptions.some((option) => !option.value)) {
            dispatch(showNotification('All attribute options must be defined.', 'error'))
            return
        }

        const newData = {
            ...data,
            attributeOptions
        }

        update('Attribute', data.id, newData)

        if (!error && !loading) {
            dispatch(showNotification('Element updated.'))
        }
    }

    const validate = (newAttributeOptions) => {
        setAttributeOptions(newAttributeOptions)
    }

    return (
        <Edit { ...props }>
            <SimpleForm save={ onSave } toolbar={<Toolbar alwaysEnableSaveButton /> }>
                <TextInput source="id" disabled />
                <TextInput source="code" validate={ required() } />
                <BooleanInput source="isEnabled" />
                <TextInput source="label" validate={ required() } />
                <AttributeOptionsInput attributeOptions={ attributeOptions } validate={ validate } />
                <BooleanInput source="isFilter" />
            </SimpleForm>
        </Edit>
    )
}

export default AttributeEdit
