import { useState } from 'react'
import { BooleanInput, Edit, SimpleForm, TextInput } from 'react-admin'
import AttributeOptionsInput from './AttributeOptionsInput.component'
import { AttributeTypeInput } from './AttributeTypeInput.component'

export function AttributeEdit(props) {
    const [type, setType] = useState()

    const onTypeChange = (event) => {
        const { target: { value } } = event

        setType(value)
    }

    return (
        <Edit { ...props }>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="code" />
                <BooleanInput source="isEnabled" />
                <TextInput source="label" />
                <AttributeTypeInput onChange={ onTypeChange } />
                <AttributeOptionsInput type={ type } />
                <BooleanInput source="isFilter" />
            </SimpleForm>
        </Edit>
    )
}

export default AttributeEdit
