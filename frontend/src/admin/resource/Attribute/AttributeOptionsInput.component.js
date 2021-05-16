import { DataGrid } from '@material-ui/data-grid'
import { useRecordContext } from 'react-admin'
import AttributeOptionsCreateButton from './AttributeOptionsCreateButton.component'

const columns = [
    {
        field: 'label',
        headerName: 'Label',
        editable: true
    },
    {
        field: 'value',
        headerName: 'Value',
        editable: true
    }
]

export function AttributeOptionsInput(props) {
    const { type: typeState } = props
    const { type, attributeOptions = '[]' } = useRecordContext()

    if ((typeState || type) != 'select'|| !attributeOptions) {
        return null
    }

    const rows = JSON.parse(attributeOptions).map((row, id) => ({ id, ...row }))
    
    return (
        <div>
            <AttributeOptionsCreateButton />
            <DataGrid columns={ columns } rows={ rows } autoHeight hideFooterPagination checkboxSelection />
        </div>
    )
}

export default AttributeOptionsInput
//onEditCellChange