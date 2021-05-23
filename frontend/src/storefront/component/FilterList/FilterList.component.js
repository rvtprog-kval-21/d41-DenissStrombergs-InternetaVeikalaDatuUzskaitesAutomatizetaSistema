import FilterItem from '../FilterItem/FilterItem.component'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    }
}))

export function FilterList(props) {
    const classes = useStyles()
    const { search: { attributes, aggregations } } = props

    const renderFilterItem = (attribute) => {
        return (
            <FilterItem attribute={ attribute } aggregations={ aggregations } />
        )
    }

    return (
        <div>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">Filters</ListSubheader>
                }
                className={classes.root}
            >
                    { attributes.map(renderFilterItem) }
            </List>
        </div>
    )
}

export default FilterList
