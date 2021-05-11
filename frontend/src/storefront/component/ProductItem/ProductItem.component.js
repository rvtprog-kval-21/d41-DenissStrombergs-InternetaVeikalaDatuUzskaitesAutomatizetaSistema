import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { useCallback } from 'react';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    }
})

export function ProductItem(props) {
    const { product: { name, sku, price, short_description, url_key } } = props
    const classes = useStyles();
    const history = useHistory()

    console.log(props);

    const onProductClick = () => {
        history.push(`/product/${ url_key }`)
    }

    return (
        <div className="ProductItem">
            <Grid
              item
              >
                <Card className={classes.root}>
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
                            { short_description }
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">Add to cart</Button>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    )
}

export default ProductItem
