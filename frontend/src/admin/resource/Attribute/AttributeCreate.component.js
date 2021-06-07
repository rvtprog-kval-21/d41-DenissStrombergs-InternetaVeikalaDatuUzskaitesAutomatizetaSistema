import { useState } from 'react'
import { BooleanInput, Create, SimpleForm, TextInput, required } from 'react-admin'
import AttributeOptionsInput from './AttributeOptionsInput.component'
import { AttributeTypeInput } from './AttributeTypeInput.component'

export function AttributeCreate(props) {
    const [type, setType] = useState()

    const onTypeChange = (event) => {
        const { target: { value } } = event

        setType(value)
    }

    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="code" validate={ required() } />
                <BooleanInput source="isEnabled" />
                <TextInput source="label" validate={ required() } />
                <AttributeTypeInput onChange={ onTypeChange } />
                <AttributeOptionsInput type={ type } />
                <BooleanInput source="isFilter" />
            </SimpleForm>
        </Create>
    )
}

export default AttributeCreate
