import { SelectInput } from 'react-admin'

export const attributeTypeChoices = [
    {
        id: 'boolean',
        name: 'Boolean'
    },
    {
        id: 'number',
        name: 'Number'
    },
    {
        id: 'string',
        name: 'String'
    },
    {
        id: 'date',
        name: 'Date'
    },
    {
        id: 'select',
        name: 'Select'
    }
]

export function AttributeTypeInput(props) {
    return (
        <SelectInput { ...props } source='type' choices={ attributeTypeChoices } />
    )
}
