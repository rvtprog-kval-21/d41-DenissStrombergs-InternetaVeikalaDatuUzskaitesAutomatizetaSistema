import * as React from 'react'
import { EditButton, List, useListContext } from 'react-admin'
import inflection from 'inflection'
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    root: {
        marginTop: '1em',
    },
    media: {
        height: 140,
    },
    title: {
        paddingBottom: '0.5em',
    },
    actionSpacer: {
        display: 'flex',
        justifyContent: 'space-around',
    },
})

function CategoryGrid(props) {
    const classes = useStyles(props)
    const { data, ids } = useListContext()

    return ids ? (
        <Grid container spacing={2} className={classes.root}>
            {ids.map(id => (
                <Grid key={id} xs={12} sm={6} md={4} lg={3} xl={2} item>
                    <Card>
                        <CardMedia
                            image="https://via.placeholder.com/512x512"
                            className={classes.media}
                        />
                        <CardContent className={classes.title}>
                            <Typography
                                variant="h5"
                                component="h2"
                                align="center"
                            >
                                {inflection.humanize(data[id].name)}
                            </Typography>
                        </CardContent>
                        <CardActions
                            classes={{ spacing: classes.actionSpacer }}
                        >
                            { /*<LinkToRelatedProducts record={data[id]} />*/}
                            <EditButton
                                basePath="/Category"
                                record={data[id]}
                            />
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    ) : null
}

function CategoryList(props) {
    return (
        <List
            {...props}
            sort={{ field: 'name', order: 'ASC' }}
            perPage={20}
            pagination={false}
            component="div"
            actions={false}
        >
            <CategoryGrid />
        </List>
    )
}

export default CategoryList
