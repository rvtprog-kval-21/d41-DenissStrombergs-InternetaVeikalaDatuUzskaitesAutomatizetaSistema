import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import queryString from 'query-string'
import { useState } from 'react'

const items = [
    {
        value: 'NO_ORDER',
        label: 'No order'
    },
    {
        value: 'NAME_ASC',
        label: 'Name A-Z'
    },
    {
        value: 'NAME_DESC',
        label: 'Name Z-A'
    },
    {
        value: 'PRICE_ASC',
        label: 'Lowest price'
    },
    {
        value: 'PRICE_DESC',
        label: 'Highest price'
    },
    {
        value: 'SOLD_AMOUNT_ASC',
        label: 'Lowest sold amount'
    },
    {
        value: 'SOLD_AMOUNT_DESC',
        label: 'Highest sold amount'
    }
]

export function Sort(props) {
    const { sort = 'NO_ORDER' } = queryString.parse(window.location.search)
    const [sortState, setSortState] = useState(sort)

    const onClick = (event) => {
        setSortState(event.target.value)
        const a = queryString.parse(window.location.search)
        a.sort = event.target.value == 'NO_ORDER' ? '' : event.target.value
        window.location.search = queryString.stringify(a)
    }

    const renderItem = (item) => {
        return (
            <MenuItem value={ item.value }>
                { item.label }
            </MenuItem>
        )
    }

    return (
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ sortState }
            onChange={ onClick }
            fullWidth
        >
            { items.map(renderItem) }
        </Select>
    )
}

export default Sort
