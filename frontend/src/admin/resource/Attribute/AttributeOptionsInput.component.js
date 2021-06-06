import { IconButton } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'
import { useRecordContext } from 'react-admin'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import { useState } from 'react'
import { AttributeTypeInput } from './AttributeTypeInput.component'

const selectTypes = [
    'select_number',
    'select_string'
]

const typeMap = {
    'select_number': 'number',
    'select_string': 'string'
}

export function AttributeOptionsInput(props) {
    const [selection, setSelection] = useState([])
    const { type: recordType, attributeOptions = [] } = useRecordContext()
    const [rows, setRows] = useState(attributeOptions.map((row, id) => ({ id, ...row })))
    const [columns, setColumns] = useState(null)
    const [type, setType] = useState(recordType)
    const { setAttributeOptions } = props

    if (!columns) {
        setColumns(
            [
                {
                    field: 'value',
                    headerName: 'Value',
                    editable: true,
                    type: typeMap[type],
                    width: 400
                }
            ]
        )
    }

    const onTypeChange = (event) => {
        const { target: { value } } = event
        const newColumns = [...columns]
        newColumns[0].type = typeMap[value]
        setColumns(newColumns)
        setType(value)

        if (type === 'select_string' && value === 'select_number') {
            const newRows = rows.map((row) => ({ ...row, value: 0 }))
            setRows(newRows)
        }

        if (type === 'select_number' && value === 'select_string') {
            const newRows = rows.map((row) => ({ ...row, value: 'Value' }))
            setRows(newRows)
        }
    }

    const onAddButtonClick = () => {
        setRows([
            ...rows,
            {
                id: rows.length,
                label: 'Label',
                value: type === 'select_string' ? 'Value' : 0
            }
        ])
    }

    const onRemoveButtonClick = () => {
        const newRows = []

        rows.forEach((row) => {
            if (selection.indexOf(row.id) < 0) {
                newRows.push(row)
            }
        })

        setRows(newRows)
        setSelection([])
    }

    const onSelectionModelChange = ({ selectionModel }) => {
        setSelection(selectionModel)
    }

    const onEditCellChangeCommitted = ({ id, props: { value } }) => {
        const newRows = rows.map((row) => {
            return (
                row.id == id ? { ...row, value: value } : row
            )
        })
        
        setRows(newRows)
    }

    const renderRemoveButton = (params) => {
        if (!selection.length) {
            return null
        }
        
        return (
            <IconButton onClick={ onRemoveButtonClick }>
                <DeleteIcon />
            </IconButton>
        )
    }

    const renderDataGrid = () => {
        if (selectTypes.indexOf((type)) < 0 || !attributeOptions) {
            return null
        }

        return(
            <>
                <IconButton onClick={ onAddButtonClick }>
                    <AddIcon />
                </IconButton>
                { renderRemoveButton() }
                <DataGrid
                    columns={ columns }
                    rows={ rows }
                    checkboxSelection
                    autoHeight
                    hideFooterPagination
                    disableColumnMenu
                    onSelectionModelChange={ onSelectionModelChange }
                    onEditCellChangeCommitted={ onEditCellChangeCommitted }
                />
            </>
        )
    }

    setAttributeOptions(rows)

    return (
        <>
            <AttributeTypeInput onChange={ onTypeChange } fullWidth />
            { renderDataGrid() }
        </>
    )
}

export default AttributeOptionsInput
