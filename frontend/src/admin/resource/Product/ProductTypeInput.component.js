import { SelectInput } from 'react-admin'

export const productTypeChoices = [
    {
        id: 'simple',
        name: 'Simple'
    },
    {
        id: 'configurable',
        name: 'Configurable'
    }
]

export function ProductTypeInput(props) {
    return (
        <SelectInput { ...props } source='type' choices={ productTypeChoices } />
    )
}
