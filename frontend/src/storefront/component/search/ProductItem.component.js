import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Price from '../product/Price.component'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    }
})

export function ProductItem(props) {
    const { product: { name, sku, price, shortDescription, urlKey } } = props
    const classes = useStyles()
    const history = useHistory()

    const onProductClick = () => {
        history.push(`/product/${ urlKey }`)
    }

    return (
        <Grid item>
            <Card className={ classes.root }>
                <CardActionArea onClick={ onProductClick }>
                    <CardMedia
                        className={classes.media}
                        image="https://via.placeholder.com/480x360"
                        title={ name }
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        { name }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        { shortDescription }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        { sku }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <Price value={ price } />
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default ProductItem
