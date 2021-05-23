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

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4)
    }
}))

export function FilterItem(props) {
    const classes = useStyles()
    const [open, setOpen] = useState(true)
    const { attribute: { label, code } } = props
    const [checked, setChecked] = useState([0])

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
    }

    const handleClick = () => {
      setOpen(!open)
    }

    const { aggregations: { filterValues } } = props

    const onClick = (event) => {
        console.log(event.target.value)
    }

    const renderFilterValue = (filterValue, indexs) => {
        const index = indexs + 1
        const labelId = `checkbox-list-label-${index }`

        return (
            <ListItem button className={ classes.nested } dense button onClick={handleToggle(index)}>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(index) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onClick={ onClick }
                    />
                </ListItemIcon>
                <ListItemText primary={ filterValue } />
            </ListItem>
        )
    }

    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemText primary={ label } />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    { Object.keys(filterValues[code]).map(renderFilterValue) }
                </List>
            </Collapse>
        </>
    )
}

export default FilterItem
