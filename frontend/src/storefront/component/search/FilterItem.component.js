import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import { makeStyles } from '@material-ui/core'
import { useState } from 'react'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Checkbox from '@material-ui/core/Checkbox'
import queryString from 'query-string'

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4)
    }
}))

export function FilterItem(props) {
    const classes = useStyles()
    const [open, setOpen] = useState(true)
    const { attribute: { label, code } } = props
    const { aggregations: { filterValues } } = props
    const a = queryString.parse(window.location.search)
    // Trash code, but lazy fixing it
    const [checked, setChecked] = useState([0, ...Object.keys(JSON.parse(a.attributeValues || '{}')[code] || []).map((val) => parseInt(val))])

    const handleClick = () => {
        setOpen(!open)
    }
    
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        const [, ...checkedMap] = newChecked
        const mapped = {}
        checkedMap.forEach((val) => mapped[val] = Object.keys(filterValues[code])[val - 1])

        const a = queryString.parse(window.location.search)
        a.attributeValues = JSON.stringify({
            ...JSON.parse(a.attributeValues || '{}'),
            [code]: mapped
        })
        window.location.search = queryString.stringify(a)

        setChecked(newChecked)
    }

    const renderFilterValue = (filterValue, indexs) => {
        const index = indexs + 1
        const labelId = `checkbox-list-label-${ index }`

        return (
            <ListItem button className={ classes.nested } dense button onClick={ handleToggle(index) }>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(index) !== -1}
                        tabIndex={ -1 }
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText primary={ filterValue } />
            </ListItem>
        )
    }

    return (
        <>
            <ListItem button onClick={ handleClick }>
                <ListItemText primary={ label } />
                { open ? <ExpandLess /> : <ExpandMore /> }
            </ListItem>
            <Collapse in={ open } timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    { Object.keys(filterValues[code]).map(renderFilterValue) }
                </List>
            </Collapse>
        </>
    )
}

export default FilterItem
