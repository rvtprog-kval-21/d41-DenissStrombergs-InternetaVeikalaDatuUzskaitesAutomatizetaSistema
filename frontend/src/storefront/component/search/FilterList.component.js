import FilterItem from './FilterItem.component'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { Typography } from '@material-ui/core'

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

    if (!attributes.length) {
        return null
    }

    return (
        <div>
            <Typography>
                Filters
            </Typography>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
            >
                    { attributes.map(renderFilterItem) }
            </List>
        </div>
    )
}

export default FilterList
